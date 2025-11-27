'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';

export function CardTray({ width = 500, height = 120, mobile = false }) {
  const theme = useTheme();

  const gradient = theme.palette.mode === 'dark'
    ? 'linear-gradient(174.99deg, #3A3F58 35.19%, #2E3248 85.79%)'
    : 'linear-gradient(174.99deg, #FFFFFF 35.19%, #DFE6FF 85.79%)';

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: mobile ? 18 : 135,  
        left: '50%',
        transform: 'translateX(-50%)',
        width: mobile ? width * 0.92 : width, 
        height: mobile ? 60 : height,   
        borderRadius: '50%',
        background: gradient,
        zIndex: 0
      }}
    />
  );
}

export default CardTray;
