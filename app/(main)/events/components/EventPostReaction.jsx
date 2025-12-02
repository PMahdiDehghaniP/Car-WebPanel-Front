// app/(main)/events/ParticularEvent/components/PostActions.jsx
'use client';

import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { MdOutlineThumbUpAlt } from 'react-icons/md';

const EventPostActions = ({ isHasPost, likes, liked, onLikeToggle, previewUrl, onRegisterPost }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between flex-end', gap: 2 }}>
        {isHasPost ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontSize: 13, color: '#1976d2', fontWeight: 700 }}>
              {likes} لایک
            </Typography>
            <IconButton onClick={onLikeToggle} aria-label="like" size="large" sx={{
              borderRadius: 2,
              bgcolor: liked ? 'rgba(0,173,207,0.12)' : 'transparent',
              '&:hover': { bgcolor: liked ? 'rgba(0,173,207,0.16)' : 'rgba(0,0,0,0.04)' }
            }}>
              <MdOutlineThumbUpAlt style={{ width: 22, height: 22, color: liked ? '#00ADCF' : '#1976d2' }} />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ width: 96 }} />
        )}
      </Box>

      {!isHasPost && (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={onRegisterPost}
            disabled={!previewUrl}
            sx={{ px: 3, py: 1.1, borderRadius: 2, textTransform: 'none' }}
          >
            ثبت عکس
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default EventPostActions;
