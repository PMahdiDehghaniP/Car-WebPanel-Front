// app/(main)/events/ParticularEvent/components/PostHeader.jsx
'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { BiTrash } from "react-icons/bi";

const EventPostHeader = ({ isHasPost, onDelete }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      pr: 2,
      pl: 2,
      pt: 1,
      mr: 2,
      mt: 2
    }}>
      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: 16 }}>عکس ارسالی من</Typography>

      {isHasPost ? (
        <Button
          size="small"
          onClick={onDelete}
          sx={{
            color: '#FF3B30',
            borderColor: '#FF3B30',
            minWidth: 0,
            width: 40,            
            height: 40,
            ml : 3,
            padding: '2px 4px',
            borderRadius: '16px',
            textTransform: 'none',
            fontSize: '0.85rem'
          }}
          variant="outlined"
        >
          <BiTrash size={20}/>
        </Button>
      ) : (
        <Box sx={{ width: 5 }} />
      )}
    </Box>
  );
};

export default EventPostHeader;
