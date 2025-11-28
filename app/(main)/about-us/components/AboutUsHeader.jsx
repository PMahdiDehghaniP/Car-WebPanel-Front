'use client' ;

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutUsHeader() {
  const gradient = `linear-gradient(${'to bottom right'}, ${'#2F6BFF'} 50%, #ffffff 50%)`;
  return (  
     <Box
      component="section"
      sx={{
        position: 'relative',
        height: '450px',
        width: '100%',
        overflow: 'hidden',
        bgcolor: 'transparent',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: gradient,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        },
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        sx={{
          position: 'absolute',
          top: 60,
          left: '50%',
          transform: 'translateX(-50%) scaleX(1.1)',
          zIndex: 2,
          color: '#fff',
          fontWeight: 300,
          fontSize: { xs: '2.5rem', sm: '4rem', md: '10rem' },
          textShadow: '0 6px 12px rgba(0,0,0,0.32)',
        }}
      >
        'گاراژینو'
      </Typography>
    <Box
        component="img"
        src="/aboutUsHeader.png"
        alt='گاراژینو'
        sx={{
        position: 'relative',
        zIndex: 2,
        display: 'block',
        mx: 'auto',
        maxHeight: { xs: 280, sm: 450, md: 500, lg: 600 },
        width: 'auto',
        transform: 'translateY(-35px)',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 18px 22px rgba(0,0,0,0.25))',
        }}
    />
    </Box>  
  );
}
