'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const MedalsBox = () => {
  const Images = ['/first.png', '/second.png', '/third.png'];
  const prizes = ['3 میلیون تومان', '1 میلیون تومان', '500 هزار تومان'] 
  const display = [
    { src: Images[2], label: 'نفر سوم', prize: prizes[2] ?? '' },
    { src: Images[0], label: 'نفر اول', prize: prizes[0] ?? '' },
    { src: Images[1], label: 'نفر دوم', prize: prizes[1] ?? '' }
  ];
  return (
    <Box sx={{
      border: '1px solid #BFBFBF',
      alignContent : 'center',
      borderRadius: 2,
      p: 2,
      bgcolor: '#fff',
      width : '100%',
      height : 222 
    }}>
      <Box 
        sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-end', 
            gap: 2 
        }}>

        {display.map((it, i) => {
          const isCenter = i === 1; 

          return (
            <Box key={i} 
            sx={{
              textAlign: 'center',
              width: isCenter ? 180 : 130,
              transform: isCenter ? 'translateY(-14px)' : 'translateY(0)',
              transition: 'transform 160ms ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Box component="img"
                src={it.src}
                alt={it.label}
                sx={{
                  width: '100%',
                  height: isCenter ? 110 : 86,
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <Typography sx={{ mt: isCenter ? 1.25 : 1, fontSize: isCenter ? 18 : 15, fontWeight: 800 }}>{it.label}</Typography>
              <Typography sx={{ fontSize: 13, color: '#555' }}>{it.prize}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default MedalsBox;