'use client';
import { Box, Grid, useTheme, Typography } from '@mui/material';
import { LinkedIn, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { contactItems, linkItems } from '@/app/constants/Home/Footer';

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        width: '100%',
        minHeight: '300px',
        backgroundColor: theme.palette?.footer?.backgroundColor,
        position: { lg: 'relative' },
        padding: '2rem 0',
        height: 'auto',
        display: 'flex'
      }}
      data-aos="zoom-in"
    >
      <Box
        component="img"
        src="/footerBg.png"
        alt="footer"
        sx={{
          display: {
            xs: 'none',
            lg: 'block'
          },
          position: {
            lg: 'absolute',
            md: 'none'
          },
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          objectFit: 'cover',
          opacity: 0.25
        }}
      />
      <Grid
        size={{ xs: 12, sm: 4 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '1rem',
          padding: '1rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>
          ارتباط با ما
        </Typography>

        {contactItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ...(index === 0 && {
                justifyContent: 'space-between',
                height: '10'
              })
            }}
          >
            <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                ...(item.maxWidth && { maxWidth: item.maxWidth })
              }}
            >
              {item.content}
            </Typography>
          </Box>
        ))}
      </Grid>

      <Grid
        size={{ xs: 6, sm: 4 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'start', sm: 'center' },
          gap: '1rem',
          padding: '1rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>
          لینک های مرتبط
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '100%',
            textAlign: { xs: 'start', sm: 'center' }
          }}
        >
          {linkItems.map((link, index) => (
            <Typography
              key={index}
              sx={{ fontSize: '1.5rem', fontWeight: 500 }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Grid>

      <Grid
        size={{ xs: 6, sm: 4 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: '1rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>
          با ما همراه باشید!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}
        >
          <LinkedIn sx={{ width: '40px', height: '40px' }} />
          <Instagram sx={{ width: '40px', height: '40px' }} />
          <Twitter sx={{ width: '40px', height: '40px' }} />
          <Facebook sx={{ width: '40px', height: '40px' }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
