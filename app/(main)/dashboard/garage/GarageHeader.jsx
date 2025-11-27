'use client';
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export default function GarageHeader({ isMobile, scale }) {
  const { theme } = useSelector((s) => s.theme);
  return (
    <Box>
      {isMobile ? (
        <Box
          sx={{
            position: 'absolute',
            top: `${Math.round(20 * scale)}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: `${Math.round(32 * scale)}px`,
            fontWeight: 800,
            whiteSpace: 'nowrap',
            zIndex: 5
          }}
        >
          گاراژ من
        </Box>
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: `${Math.round(40 * scale)}px`,
            left: `${Math.round(1600 * scale)}px`,
            fontSize: `${Math.round(58 * scale)}px`,
            fontWeight: 800,
            zIndex: 5
          }}
        >
          گاراژ من
        </Box>
      )}
    </Box>
  );
}
