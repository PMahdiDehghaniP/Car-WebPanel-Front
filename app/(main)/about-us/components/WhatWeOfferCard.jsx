import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function WhatWeOfferCard() {
  return (
    <Box  sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={0}
        square
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          height: '800px',
          width: '1500px',
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            p: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Box
            component="img"
            src="/servicws.png"
            alt="services"
            sx={{
              width: '85%',
              maxHeight: '45%',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          <Box
            component="img"
            src="/Socialnetwork.png"
            alt="social network"
            sx={{
              width: '85%',
              maxHeight: '45%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'right',
          }}
        >
          <Stack spacing={8}>
            <Typography variant="h4" component="h2" 
             sx=
             {{ 
                fontWeight: 700 ,
                fontSize: '3rem'
             }}
            >
              چه چیزهایی ارائه می‌دهیم؟
            </Typography>
            <Box>
              <Typography variant="h6" 
               sx=
               {{ 
                    fontWeight: 700, mb: 1 ,
                    fontSize : '1.5rem'
                }}
              >
                بانک اطلاعات فنی خودرو
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                • تمام مشخصات فنی، تیپ‌ها، مصرف سوخت، شتاب، امکانات و قیمت تقریبی
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" 
               sx=
               {{ 
                    fontWeight: 700, mb: 1 ,
                    fontSize : '1.5rem'
               }}
              >
                ابزارهای هوشمند
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                • مقایسهٔ کنارهم خودروها
                <br />• تخمین هزینه سالانه (سوخت، بیمه، مالیات و…)
                <br />• فیلترهای پیشرفته و جستجوی دقیق
                <br />• گاراژ شخصی برای ذخیره خودروها و ساخت مجموعه‌ها
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" 
                sx=
               {{ 
                    fontWeight: 700, mb: 1 ,
                    fontSize : '1.5rem'
               }}
              >
                شبکه اجتماعی خودرو
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                • امکان ایجاد پست (عکس، ویدیو، متن)
                <br />• لایک، کامنت، فالو
                <br />• نمایش پست‌های ترند و مرتبط با علایق کاربر
                <br />• سیستم گزارش و مدیریت محتوا
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" 
                sx=
               {{ 
                    fontWeight: 700, mb: 1 ,
                    fontSize : '1.5rem'
               }}
              >
                گیمیفیکیشن و اچیومنت
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                • کسب نشان، امتیاز و قابلیت‌های قابل آزادسازی بر اساس فعالیت کاربران
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
