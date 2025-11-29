// app/error500/page.tsx
'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Error500Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile devices

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#EAEAEA',
        display: 'flex',
        alignItems: 'center',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
            alignItems: 'center',
            gap: { xs: 3, sm: 4, md: 6 },
          }}
        >
          {/* Left side: Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              maxWidth: { xs: '100%', md: '500px' },
              width: '100%',
              position: 'relative',
              height: { xs: '300px', sm: '400px', md: '500px' },
              overflow: 'hidden',
            }}
          >
            <Image
              src="/error_car.svg"
              alt="Error 500 - Car illustration"
              width={isMobile ? 280 : 500}
              height={isMobile ? 250 : 400}
              priority
              style={{
                objectFit: 'contain',
                transform: isMobile ? 'scale(0.8)' : 'scale(0.9)',
              }}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg'; // Fallback image if original fails to load
              }}
            />
            {!isMobile && (
              <Typography
                variant="h1"
                sx={{
                  position: 'absolute',
                  top: '10%',
                  left: '5%',
                  fontSize: '12rem',
                  fontWeight: 'bold',
                  color: 'rgba(255,255,255,0.2)',
                  zIndex: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                500
              </Typography>
            )}
          </Box>

          {/* Right side: Text and button */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'right' }, // Center on mobile, right-aligned on desktop
              pr: { md: 8, xs: 0 }, // Add padding-right only on desktop for text alignment
              maxWidth: { xs: '100%', md: '500px' },
            }}
          >
            {/* Main title - should be in one line on desktop */}
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontFamily: 'Vazirmatn, sans-serif',
                fontWeight: 700,
                fontSize: {
                  xs: '2rem',   // 32px on mobile
                  sm: '2.5rem', // 40px on tablet
                  md: '3.75rem', // 60px on desktop
                },
                lineHeight: {
                  xs: 1.3,
                  md: 1.2,
                },
                letterSpacing: '0',
                color: '#20263C',
                mb: { xs: 1, md: 2 },
                transform: { md: 'translateX(8px)' }, // Slight shift for visual balance
                textAlign: { xs: 'center', md: 'right' },
                // 👇 Force single line on desktop to avoid wrapping
                whiteSpace: { md: 'nowrap' },
                wordBreak: 'keep-all', // Prevent breaking words in Persian text
              }}
            >
              !یه جای کار می لنگه
            </Typography>

            {/* Description text */}
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: 'Vazirmatn, sans-serif',
                fontWeight: 400,
                fontSize: {
                  xs: '1rem',   // 16px
                  sm: '1.125rem', // 18px
                  md: '1.5625rem', // 25px
                },
                lineHeight: {
                  xs: 1.5,
                  md: 1.6,
                },
                letterSpacing: '0',
                color: '#000000',
                textAlign: { xs: 'center', md: 'right' },
                mb: { xs: 2, md: 3 },
                mt: { xs: 1, md: 2 },
                transform: { md: 'translateX(8px)' },
              }}
            >
              .متاسفانه سرورمون به مشکل خورد و نتونست به درخواستت جواب بده
            </Typography>

            {/* Button - aligned under description text */}
            <Button
              variant="contained"
              onClick={handleBackToHome}
              sx={{
                bgcolor: '#990000',
                '&:hover': { bgcolor: '#7a0000' },
                fontWeight: 'bold',
                borderRadius: '50px',
                px: { xs: 2.5, sm: 3.5, md: 4 },
                py: { xs: 1.2, sm: 1.5, md: 2 },
                fontSize: {
                  xs: '1rem',
                  sm: '1.25rem',
                  md: '1.625rem',
                },
                fontFamily: 'Vazirmatn, sans-serif',
                ml: { xs: 'auto', md: 'auto' }, // 👈 Align button to the right (in RTL, this means margin-left: auto)
                mt: 1,
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '280px', sm: '350px', md: '470px' },
                display: 'block',
                mx: { xs: 'auto', md: 'auto' }, // 👈 Keep centered on mobile, right-aligned on desktop
                // 👇 Ensure button stays under the description text by adjusting vertical spacing
                marginBottom: { xs: 0, md: 0 },
              }}
            >
              بازگشت به صفحه اصلی
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}