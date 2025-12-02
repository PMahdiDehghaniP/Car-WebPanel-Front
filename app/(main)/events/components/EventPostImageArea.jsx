
'use client';

import React from 'react';
import { Box, Stack, Avatar, Typography } from '@mui/material';

const EventPostImageArea = ({ isHasPost, post, previewUrl, openFilePicker }) => {
  return (
    <Box sx={{ p: 2 }}>
      {isHasPost ? (
        <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
          <Box
            component="img"
            src={post.image}
            alt="user post"
            sx={{
              width: '100%',
              height: 320,
              objectFit: 'cover',
              display: 'block',
              borderRadius: 2
            }}
          />
          <Stack direction="row" spacing={-1.2} sx={{
            position: 'absolute',
            left: 12,
            top: 12,
            alignItems: 'center'
          }}>
            {(post.avatars && post.avatars.length > 0 ? post.avatars : []).slice(0,3).map((a, i) => (
              <Avatar key={i} src={a} sx={{ width: 44, height: 44, border: '2px solid white' }} />
            ))}
            {(!post.avatars || post.avatars.length === 0) && (
              <>
                <Avatar sx={{ width: 44, height: 44, border: '2px solid white' }} src="/sample-avatar-1.jpg" />
                <Avatar sx={{ width: 44, height: 44, border: '2px solid white' }} src="/sample-avatar-2.jpg" />
              </>
            )}
          </Stack>
        </Box>
      ) : (
        <Box
          onClick={openFilePicker}
          sx={{
            width: '100%',
            height: 260,
            borderRadius: 1.5,
            background: '#efefef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#BDBDBD',
            border: '1px solid #E6E6E6',
            cursor: 'pointer',
            '&:hover': { background: '#f2f2f2' }
          }}
        >
          <svg width="96" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H6L7.6 4.4C7.82 4.02 8.19 3.78 8.6 3.78H15.4C15.81 3.78 16.18 4.02 16.4 4.4L18 7H20C21.1 7 22 7.9 22 9V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V9C2 7.9 2.9 7 4 7Z" stroke="#CFCFCF" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="13" r="3.5" stroke="#CFCFCF" strokeWidth="0.9"/>
          </svg>

          {previewUrl ? (
            <Typography sx={{ mt: 1, color: '#333', fontSize: 13 }}>پیش‌نمایش انتخاب شده — اکنون روی «ثبت عکس» بزن</Typography>
          ) : (
            <Typography sx={{ mt: 1, color: '#9E9E9E' }}>افزودن عکس</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default EventPostImageArea;
