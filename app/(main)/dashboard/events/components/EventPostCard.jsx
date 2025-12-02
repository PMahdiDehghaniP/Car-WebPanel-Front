'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import EventPostHeader from './EventPostHeader';
import EventPostImageArea from './EventPostImageArea';
import EventPostCaption from './EventPostCaption';
import EventPostActions from './EventPostReaction';
import { useSelector } from 'react-redux';

const EventPostCard = ({ initialPost = null, maxWidth = 500 }) => {
  const { theme } = useSelector((s) => s.theme || { theme: 'light' });
  const [post, setPost] = useState(initialPost);
  const [likes, setLikes] = useState(initialPost?.likes ?? 0);
  const [liked, setLiked] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [caption, setCaption] = useState(initialPost?.caption ?? '');
  const fileRef = useRef(null);
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const isHasPost = Boolean(post);
  const openFilePicker = () => fileRef.current?.click();
  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (previewUrl) {
      try {
        URL.revokeObjectURL(previewUrl);
      } catch {}
    }
    const url = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(url);
  };
  const onRegisterPost = () => {
    if (!previewUrl) return;
    const newPost = {
      image: previewUrl,
      caption: caption || ' ',
      likes: 0,
      avatars: []
    };
    setPost(newPost);
    setLikes(0);
    setLiked(false);
    setSelectedFile(null);
  };
  const onDelete = () => {
    if (post && post.image && post.image.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(post.image);
      } catch {}
    }
    setPost(null);
    setLikes(0);
    setLiked(false);
    setSelectedFile(null);
    setPreviewUrl(null);
    setCaption('');
  };

  const onLikeToggle = () => {
    if (!post) return;
    setLiked((p) => {
      const next = !p;
      setLikes((l) => l + (next ? 1 : -1) / 2);
      return next;
    });
  };
  return (
    <Box sx={{ width: '100%', mx: 'auto', p: 1, height: 500 }}>
      <Box
        sx={{
          border: '1px solid #B4B4B4',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: theme === 'dark' ? '#272F4E' : '#fff',
          boxShadow: '0 6px 18px rgba(0,0,0,0.04)'
        }}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={onFileChange}
        />
        <EventPostHeader isHasPost={isHasPost} onDelete={onDelete} />
        <EventPostImageArea
          isHasPost={isHasPost}
          post={post}
          previewUrl={previewUrl}
          openFilePicker={openFilePicker}
        />
        <Box sx={{ px: 2, py: 1.25 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'nowrap'
            }}
          >
            <EventPostCaption
              isHasPost={isHasPost}
              caption={isHasPost ? (post?.caption ?? '') : caption}
              onCaptionChange={(v) => setCaption(v)}
            />
            <EventPostActions
              isHasPost={isHasPost}
              likes={likes}
              liked={liked}
              onLikeToggle={onLikeToggle}
              previewUrl={previewUrl}
              onRegisterPost={onRegisterPost}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default EventPostCard;
