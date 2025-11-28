import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

/**
 * WhoAreWeCard (MUI, JSX)
 * تغییرات جدید:
 * - عرض کل ثابت: 1420px
 * - ستون متن در سمت چپ، ستون عکس در سمت راست
 * - ارتفاع: 428.25px
 * - عرض تصویر: 316.5px
 * - border-bottom: 2px solid #2F6BFF
 * - border-radius: 50px
 * - فاصله منطقی عمودی بین هدر و بندها با استفاده از Stack (spacing)
 * - مسیر تصویر: /whoareus.png (قرار دهید در public یا مسیر مناسب)
 */

export default function WhoAreWeCard() {
  return (
    <Box dir="rtl" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={0}
        square
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          height: '600px',
          width: '1500px',
          borderRadius: '50px',
          borderBottom: '2px solid #2F6BFF',
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}
      >
        {/* ستون تصویر — همیشه در سمت راست، عرض ثابت 316.5px */}
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
            src="/whoareus.png"
            alt="who are us"
            sx={{
              maxWidth: '90%',
              maxHeight: '80%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
        {/* ستون متن — اکنون در سمت چپ */}
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
          <Stack spacing={2}
            sx={{
              gap: 15
            }}
          >
            <Typography variant="h5" component="h2" 
              sx={{
               fontWeight: 500 ,
               fontSize : '2.6rem'
            }}>
              ما کی هستیم ؟
            </Typography>

            <Typography variant="body1" 
              sx={{
                 lineHeight: 1.2 ,
                 fontSize : '1.6rem'
                }}
            >
              ما تیم It’s All 200 هستیم؛ گروهی از دانشجویان علاقه‌مند به خودرو و
              تکنولوژی که هدفمان ساخت یک پلتفرم جامع و حرفه‌ای خودرویی است.
            </Typography>

            <Typography variant="body1" 
             sx={{
                 lineHeight: 1.2 ,
                 fontSize : '1.6rem'
                }}
            >
              پلتفرمی که هم اطلاعات فنی دقیق ارائه کند، هم ابزارهای تحلیلی بدهد، و
              هم یک شبکه اجتماعی مخصوص عاشقان خودرو باشد.
            </Typography>
          </Stack>
        </Box>


      </Paper>
    </Box>
  );
}
