import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function TeamCard({ isMobile = false }) {
  const leftPanelWidth = isMobile ? '20%' : 360;
  const padding = isMobile ? 1 : 6;
  const titleFontSize = isMobile ? '1rem' : '3rem';
  const nameFontSize = isMobile ? '0.75rem' : '2rem';
  const bodyFontSize = isMobile ? '0.5rem' : '1.6rem';
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
          bgcolor: 'background.paper'
        }}
      >
        <Box
          sx={{
            width: isMobile ? '35%' : leftPanelWidth,
            minWidth: isMobile ? '35%' : leftPanelWidth,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src="/teamWork.png"
            alt="team work"
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
          <Stack spacing={isMobile ? 4 : 7}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600, fontSize: titleFontSize }}
            >
              تیم ما
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: isMobile ? 0 : 35,
                flexWrap: 'nowrap'
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minWidth: isMobile ? 0 : 280,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, fontSize: nameFontSize }}
                >
                  Front-End
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, fontSize: bodyFontSize }}
                >
                  • مهدی دهقانی
                  <br />• آرین سعیدکندری
                  <br />• عرفان قاسمیان
                  <br />• رامین کلانتری
                  <br />• محمد مهدی پاشاپور
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minWidth: isMobile ? 0 : 240,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, fontSize: nameFontSize }}
                >
                  Back-End
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, fontSize: bodyFontSize }}
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
