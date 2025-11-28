import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function TeamCard() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          height: '500px',
          width: '1440px',
          borderRadius: '50px',
          borderBottom: '2px solid #2F6BFF',
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}
      >
        <Box
          sx={{
            width: '360px',
            minWidth: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Box
            component="img"
            src="/teamWork.png"
            alt="team work"
            sx={{
              maxWidth: '105%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            p: 6,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'right',
          }}
        >
          <Stack spacing={7}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, fontSize: '3rem' }}
            >
              تیم ما
            </Typography>
            <Box sx={{ display: 'flex', gap: 15 }}>
              <Box sx={{ minWidth: 280 }}>
                <Typography variant="h6" 
                 sx={{
                     fontWeight: 700, mb: 1  ,
                     fontSize: '2rem'
                 }}
                >
                  Front-End
                </Typography>
                <Typography variant="body1" 
                 sx={{
                    lineHeight: 1.8,
                    fontSize: '1.5rem' 
                 }}
                >
                  • مهدی دهقانی
                  <br />• آرین سعیدکندری
                  <br />• عرفان قاسمیان
                  <br />• رامین کلانتری
                  <br />• محمد مهدی پاشاپور
                </Typography>
              </Box>
              <Box sx={{ minWidth: 240 , spacing :10 }}>
                <Typography variant="h6" 
                 sx={{
                     fontWeight: 700, mb: 1  ,
                     fontSize: '2rem'
                 }}
                >
                  Back-End
                </Typography>
                <Typography variant="body1" 
                 sx={{
                    lineHeight: 1.8,
                    fontSize: '1.5rem' 
                 }}
                >
                  • ابوالفضل شهسواری
                  <br />• محمد متین نوری
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
