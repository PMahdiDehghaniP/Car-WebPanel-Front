'use client';

import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

const samplePosts = Array.from({ length: 12 }).map((_, i) => ({
  avatar: `/sample-avatar-${(i % 3) + 1}.jpg`,
  username: `کاربر ${i + 1}`,
  caption: `این یک پست نمونه شماره ${i + 1} است. متن طولانی هم باشه برای تست.`,
  image: `/sample-post-${(i % 3) + 1}.jpg`,
  createdAt: Date.now() - (1000 * 60 * (i + 10)),
  initialLikes: Math.floor(Math.random() * 300)
}));
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Stack
} from '@mui/material';
import { MdOutlineThumbUpAlt, MdMoreHoriz } from 'react-icons/md';
import { GoReport } from 'react-icons/go';
import { useSelector } from 'react-redux';

const remainingTime = (input) => {
  if (!input) return '';
  const now = Date.now();
  const date = input instanceof Date ? input : new Date(input);
  const sec = Math.max(0, Math.floor((now - date.getTime()) / 1000));
  if (sec < 60) return `${sec} ثانیه پیش`;
  const m = Math.floor(sec / 60);
  if (m < 60) return `${m} دقیقه پیش`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} ساعت پیش`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d} روز پیش`;
  const w = Math.floor(d / 7);
  if (w < 5) return `${w} هفته پیش`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo} ماه پیش`;
  return `${Math.floor(d / 365)} سال پیش`;
};

const SharedEventPostCard = ({
  avatar,
  username,
  caption,
  image,
  createdAt,
  initialLikes = 0,
  initiallyLiked = false,
  onReport = () => {},
  onMore = () => {},           
  avatarSize = 56,}) => {
  const { theme } = useSelector((s) => s.theme || { theme: 'light' });
  const [likes, setLikes] = React.useState(initialLikes);
  const [liked, setLiked] = React.useState(Boolean(initiallyLiked));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const timeText = React.useMemo(() => remainingTime(createdAt), [createdAt]);
  const handleLikeToggle = () => {
    setLiked(prev => {
      const next = !prev;
      setLikes(l => l + (next ? 1 : -1));
      return next;
    });
  };

  const openMenu = (e) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const handleReport = () => { closeMenu(); onReport(); };
  const handleMore = () => { closeMenu(); onMore(); };

  return (
    <Card sx={{
      width: 700,
      maxWidth: '100%',
      height : 680,
      mx: 0,
      borderRadius: 1,
      boxShadow: '0 6px 18px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      bgcolor: theme === 'dark' ? '#272F4E' :'#fff' 
    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',   py: 1 }}>
        <Stack direction="row" spacing={12} gap={3} alignItems="center" sx={{ minWidth: 0 }}>
          <Avatar src={avatar} sx={{ width: avatarSize, height: avatarSize }} />
          <Box sx={{ minWidth: 0}}>
            <Typography sx={{ fontSize: 15, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{username}</Typography>
            <Typography sx={{ fontSize: 12, color: '#757575' }}>{timeText}</Typography>
          </Box>
        </Stack>
        <Box>
          <IconButton aria-label="more" size="large" onClick={openMenu}>
            <MdMoreHoriz style={{ width: 22, height: 22 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleReport}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GoReport />
                <Typography>گزارش پست</Typography>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleMore}>
              <Typography>بیشتر...</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Divider />
      {image && (
        <Box
          role="img"
          aria-label="post image"
          sx={{
            width: '100%',
            height: 500,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'block'
          }}
        />
      )}
      <CardContent sx={{ pb: 1 }}>
        <Typography sx={{ fontSize: 14, color: '#333', whiteSpace: 'normal' }}>
          {caption ?? ''}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            aria-label="like"
            onClick={handleLikeToggle}
            sx={{
              borderRadius: 2,
              bgcolor: liked ? 'rgba(0,173,207,0.12)' : 'transparent',
              '&:hover': { bgcolor: liked ? 'rgba(0,173,207,0.16)' : 'rgba(0,0,0,0.04)' }
            }}
            size="large"
          >
            <MdOutlineThumbUpAlt style={{ width: 20, height: 20, color: liked ? '#00ADCF' : '#1976d2' }} />
          </IconButton>
          <Typography sx={{ fontSize: 13, color: '#1976d2', fontWeight: 700 }}>
            {likes} لایک
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton aria-label="report" onClick={handleReport} size="large" sx={{ '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }}>
            <GoReport style={{ width: 18, height: 18, color: '#FF3B30' }} />
          </IconButton>
          <Typography sx={{ fontSize: 12 }}>
            گزارش دادن
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default function PostsList({
}) {
  const isMobile = useMediaQuery('(max-width:720px)');
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        px: 0,
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          height: '1330px'  ,
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          py: 0,
          boxSizing: 'border-box',
          border: '1px solid #E0E0E0',
          borderRadius: 2,
          px: 1,
          '&::-webkit-scrollbar': {
            width: 12,
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C4C4',
            borderRadius: 8,
            minHeight: 40
          },
          scrollbarWidth: 'thin',
          scrollbarColor: '#C4C4C4 transparent'
        }}
        aria-label="Event posts list"
      >
        <Box sx={{ display: 'grid', gap: 3, justifyContent: 'center', direction: 'rtl' }}>
          {samplePosts.map((p, i) => (
            <SharedEventPostCard
              key={i}
              avatar={p.avatar}
              username={p.username}
              caption={p.caption}
              image={p.image}
              createdAt={p.createdAt}
              initialLikes={p.initialLikes}
              maxWidth={'100%'}
              imageHeight={isMobile ? 180 : 280}
              compact={true}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
