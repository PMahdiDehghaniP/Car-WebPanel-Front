'use client' ;

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutUsHeader({
  title = 'گاراژینو',
  imageSrc ="/aboutUsHeader.png" ,
  height = 300,
  blue = '#2F6BFF',
  direction = 'to bottom right',
}) {
  const gradient = `linear-gradient(${direction}, ${blue} 50%, #ffffff 50%)`;
  return (  
     <Box
      component="section"
      sx={{
        position: 'relative',
        height: `${height}px`,
        width: '100%',
        overflow: 'hidden',
        // ensure no background color here that could override pseudo
        bgcolor: 'transparent',
        // pseudo-element creates the exact half-split diagonal
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
      {/* content above the background */}
      <Typography
        component="h1"
        variant="h1"
        sx={{
          position: 'absolute',
          top: 65,
          left: '50%',
          transform: 'translateX(-50%) scaleX(1.6)',
          zIndex: 2,
          color: '#fff',
          fontWeight: 300,
          fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
          textShadow: '0 6px 12px rgba(0,0,0,0.32)',
        }}
      >
        {title}
      </Typography>

      {imageSrc && (
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'block',
            mx: 'auto',
            maxHeight: { xs: 140, sm: 220, md: 360, lg: 420 },
            width: 'auto',
            transform: 'translateY(-38px)',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 18px 22px rgba(0,0,0,0.25))',
          }}
        />
      )}
    </Box>  
  );
}
