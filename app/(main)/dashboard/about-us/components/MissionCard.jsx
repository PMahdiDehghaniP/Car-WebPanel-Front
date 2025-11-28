import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function MissionsCard({ isMobile = false }) {
  const leftPanelWidth = isMobile ? '20%' : 360;
  const padding = isMobile ? 1 : 6;
  const titleFontSize = isMobile ? '1rem' : '3rem';
  const bodyFontSize = isMobile ? '0.5rem' : '1.6rem';
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', px: isMobile ? 1.5 : 0 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          height: isMobile ? 160 : 500,
          width: isMobile ? '100%' : 1440,
          borderRadius: isMobile ? '28px' : '50px',
          borderBottom: `2px solid #2F6BFF`,
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}
      >
        <Box
          sx={{
            width: isMobile ? '30%' : leftPanelWidth,
            minWidth: isMobile ? '30%' : leftPanelWidth,
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
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            p: padding,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'right',
          }}
        >
          <Stack spacing={2} sx={{ gap: isMobile ? 3 : 10 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 500, fontSize: titleFontSize }}>
              ماموریت ما
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.2, fontSize: bodyFontSize }}>
              ساخت یک اکوسیستم یکپارچه که ترکیبی باشد از:
              <br /> • دیتابیس کامل و دقیق خودروها
              <br />• ابزارهای هوشمند مثل مقایسه و تخمین هزینه
              <br />• شبکه اجتماعی خودرو محور
              <br />• قابلیت‌های شخصی‌سازی مثل گاراژ و اچیومنت
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.2, fontSize: bodyFontSize }}>
              هدف ما ایجاد محیطی است که در آن کاربران بتوانند بهتر انتخاب کنند، راحت‌تر
              به اطلاعات برسند، و با دیگران تعامل واقعی داشته باشند.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
