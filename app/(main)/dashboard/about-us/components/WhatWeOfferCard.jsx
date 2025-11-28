import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function WhatWeOfferCard({ isMobile = false }) {
  const leftPanelWidth = isMobile ? '20%' : 360;
  const padding = isMobile ? 1 : 6;
  const titleFontSize = isMobile ? '1rem' : '3rem';
  const headingFontSize = isMobile ? '0.75rem' : '2rem';
  const bodyFontSize = isMobile ? '0.45rem' : '1.6rem'; 
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', px: isMobile ? 1.5 : 0 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          height: isMobile ? 320 : 900,
          width: isMobile ? '100%' : 1440,
          borderRadius: isMobile ? '28px' : '50px',
          borderBottom: `2px solid #2F6BFF`,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            width: isMobile ? '30%' : leftPanelWidth,
            minWidth: isMobile ? '30%' : leftPanelWidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            p: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Box
            component="img"
            src="/servicws.png"
            alt="services"
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <Box
            component="img"
            src="/Socialnetwork.png"
            alt="social network"
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
            p: { xs: 4, md: padding },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'right',
          }}
        >
          <Stack spacing={isMobile ? 3 : 8}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, fontSize: titleFontSize }}>
              چه چیزهایی ارائه می‌دهیم؟
            </Typography>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: headingFontSize }}>
                بانک اطلاعات فنی خودرو
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: bodyFontSize }}>
                • تمام مشخصات فنی، تیپ‌ها، مصرف سوخت، شتاب، امکانات و قیمت تقریبی
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: headingFontSize }}>
                ابزارهای هوشمند
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: bodyFontSize }}>
                • مقایسهٔ کنارهم خودروها
                <br />• تخمین هزینه سالانه (سوخت، بیمه، مالیات و…)
                <br />• فیلترهای پیشرفته و جستجوی دقیق
                <br />• گاراژ شخصی برای ذخیره خودروها و ساخت مجموعه‌ها
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: headingFontSize }}>
                شبکه اجتماعی خودرو
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: bodyFontSize }}>
                • امکان ایجاد پست (عکس، ویدیو، متن)
                <br />• لایک، کامنت، فالو
                <br />• نمایش پست‌های ترند و مرتبط با علایق کاربر
                <br />• سیستم گزارش و مدیریت محتوا
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: headingFontSize }}>
                گیمیفیکیشن و اچیومنت
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: bodyFontSize }}>
                • کسب نشان، امتیاز و قابلیت‌های قابل آزادسازی بر اساس فعالیت کاربران
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

WhatWeOfferCard.propTypes = {
  isMobile: PropTypes.bool,
};
