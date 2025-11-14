'use client';

import { Box, Typography, Button, Container, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Image from 'next/image';

// Rtl theme definition
const theme = createTheme({
  direction: 'rtl',
  palette: {
    background: {
      default: '#EAEAEA',
    },
    text: {
      primary: '#20263C', 
    },
  },
});

export default function ErrorStylePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 3, sm: 4, md: 6 },
            }}
          >
            {/* A man with car picture not in responsive mode */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                maxWidth: { xs: '100%', md: '500px' },
                width: '100%',
                position: 'relative',
                height: { xs: '400px', sm: '500px', md: '600px' },
                overflow: 'hidden',
              }}
            >
              <Image
                src="/error_car.svg"
                alt="خطای سرور - ماشین خراب"
                fill
                priority
                style={{
                  position: 'absolute',
                  top: { xs: '6%', sm: '6%', md: '6%' },
                  left: { xs: '2%', sm: '1.5%', md: '1%' },
                  objectFit: 'contain',
                  transform: 'scale(0.9)',
                }}
              />
            </Box>

            {/* the passage and the button(بازگشت به صفحه اصلی)*/}
            <Box
              sx={{
                flex: 1,
                textAlign: 'right',
                pr: { md: 8, xs: 0 },
                maxWidth: { xs: '100%', md: '500px' },
              }}
            >
              {/* Main passage*/}
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  fontFamily: 'Vazirmatn, sans-serif',
                  fontWeight: 700,
                  fontSize: {
                    xs: '28px',
                    sm: '36px',
                    md: '60px',
                  },
                  lineHeight: {
                    xs: '1.3',
                    md: '1.2',
                  },
                  letterSpacing: '0',
                  color: '#20263C',
                  transform: { xs: 'translateX(4px)', md: 'translateX(8px)' },
                  textAlign: { xs: 'center', md: 'right' },
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                !یه جای کار می لنگه
              </Typography>

              {/*second passage with analyzing small desktop windows and mobile pages*/}
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontFamily: 'Vazirmatn, sans-serif',
                  fontWeight: 400,
                  fontSize: {
                    xs: '14px',
                    sm: '16px',
                    md: '25px',
                  },
                  lineHeight: {
                    xs: '1.5',
                    md: '1.6',
                  },
                  letterSpacing: '0',
                  color: '#000000',
                  textAlign: { xs: 'center', md: 'right' },
                  transform: { xs: 'translateX(4px)', md: 'translateX(8px)' },
                  mb: { xs: 2, md: 3 },
                  mt: { xs: 1, md: 2 },
                }}
              >
                .متاسفانه سرورمون به مشکل خورد و نتونست به درخواستت جواب بده
              </Typography>

              {/* button and its sizes here mentioned.*/}
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#990000',
                  '&:hover': { bgcolor: '#7a0000' },
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  px: { xs: 2.5, sm: 3.5, md: 4 },
                  py: { xs: 1.2, sm: 1.5, md: 2 },
                  fontSize: {
                    xs: '16px',
                    sm: '20px',
                    md: '26px',
                  },
                  fontFamily: 'Vazirmatn, sans-serif',
                  ml: 'auto',
                  mt: 1,
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: '280px', sm: '350px', md: '470px' },// rendering to responsive mode
                }}
                onClick={() => (window.location.href = '/')}
              >
                بازگشت به صفحه اصلی
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}