'use client';

import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const EventPostCaption = ({ isHasPost, caption, onCaptionChange }) => {
  const captionTextColor = '#333';
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap'
        }}
      >
        <Box sx={{ flex: 1, minWidth: 180 }}>
          {isHasPost ? (
            <Typography sx={{ color: captionTextColor, fontSize: 14 }}>
              {caption ?? ''}
            </Typography>
          ) : (
            <TextField
              value={caption}
              onChange={(e) => onCaptionChange(e.target.value)}
              placeholder="افزودن توضیحات ..."
              fullWidth
              size="small"
              multiline
              minRows={1}
              variant="standard"
              sx={{
                '& .MuiInputBase-root': { padding: 0 },
                '& .MuiInputBase-input': {
                  color: captionTextColor,
                  padding: '6px 0'
                },
                '& .MuiInput-underline:before': { display: 'none' },
                '& .MuiInput-underline:after': { display: 'none' }
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EventPostCaption;
