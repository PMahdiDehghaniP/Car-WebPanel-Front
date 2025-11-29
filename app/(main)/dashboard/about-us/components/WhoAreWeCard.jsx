import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function WhoAreWeCard({ isMobile }) {
  const leftPanelWidth = isMobile ? '20%' : 360;
  const padding = isMobile ? 1 : 6;
  const titleFontSize = isMobile ? '1rem' : '3rem';
  const bodyFontSize = isMobile ? '0.45rem' : '1.6rem';
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', px: isMobile ? 1.5 : 0 }}
    >
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
          flexDirection: 'row'
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
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src="/whoareus.png"
            alt="who are us"
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block'
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
            textAlign: 'right'
          }}
        >
          <Stack spacing={isMobile ? 2.5 : 2} sx={{ gap: isMobile ? 3 : 15 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 500, fontSize: titleFontSize }}
            >
              ما کی هستیم ؟
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.2, fontSize: bodyFontSize }}
            >
              ما تیم It’s All 200 هستیم؛ گروهی از دانشجویان علاقه‌مند به خودرو و
              تکنولوژی که هدفمان ساخت یک پلتفرم جامع و حرفه‌ای خودرویی است.
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.2, fontSize: bodyFontSize }}
            >
              پلتفرمی که هم اطلاعات فنی دقیق ارائه کند، هم ابزارهای تحلیلی بدهد،
              و هم یک شبکه اجتماعی مخصوص عاشقان خودرو باشد.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
 