import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function MissionsCard() {
  return (
    <Box  sx={{ display: 'flex', justifyContent: 'center' }}>
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
            src="/missions.png"
            alt="missions"
            sx={{
              maxWidth: '90%',
              maxHeight: '80%',
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
          <Stack spacing={2} sx={{ gap: 10 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
               fontWeight: 500 ,
               fontSize : '3rem'
            }}
            >
              ماموریت ما
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.2, fontSize: '1.6rem' }}>
              ساخت یک اکوسیستم یکپارچه که ترکیبی باشد از:
              <br /> • دیتابیس کامل و دقیق خودروها
              <br />• ابزارهای هوشمند مثل مقایسه و تخمین هزینه
              <br />• شبکه اجتماعی خودرو محور
              <br />• قابلیت‌های شخصی‌سازی مثل گاراژ و اچیومنت
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.2, fontSize: '1.6rem' }}>
              هدف ما ایجاد محیطی است که در آن کاربران بتوانند بهتر انتخاب کنند، راحت‌تر
              به اطلاعات برسند، و با دیگران تعامل واقعی داشته باشند.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
