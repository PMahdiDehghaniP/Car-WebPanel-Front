'use client';
import { useAppSelector } from '@/hooks/reduxHooks';
import { Typography } from '@mui/material';
import { Box, Grid, useTheme } from '@mui/system';
import SearchBar from './SearchBar';
import ToggleThemeButton from './ToggleThemeButton';

const HomePageHeader = () => {
  const theme = useTheme();

  const { theme: themeStatus } = useAppSelector((state) => state.theme);
  return (
    <Grid
      container
      sx={{
        width: '100%',
        minHeight: {
          lg: themeStatus === 'light' ? '900px' : '700px',
          md: '550px',
          sm: '550px',
          xs: '450px',
          laptop: '600px'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'start',
        background:
          'linear-gradient(180deg, rgba(254, 254, 254, 0.2) 10.1%, rgba(57, 57, 57, 0.2) 62.5%)',
        position: 'relative',
        overflow: 'hidden',
        height: 'auto'
      }}
    >
      <Box
        component="img"
        src={`${themeStatus === 'dark' ? 'HomePageMainImage.jpg' : 'homePageLightLambo.png'}`}
        alt="lambo"
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: {
            lg: themeStatus === 'light' ? '-150px' : '-350px',
            md: '-100px',
            sm: '-50px',
            xs: '13%'
          },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}
      />
      <ToggleThemeButton />
      <Box
        component="img"
        src={
          themeStatus === 'dark'
            ? '/garajinoLogoDark.png'
            : '/garajinoLogoLight.png'
        }
        alt="Logo"
        sx={{
          zIndex: 2,
          position: 'relative',
          mt: 4
        }}
      />

      <Typography
        sx={{
          fontSize: { md: '70px', xs: '24px' },
          fontWeight: 700,
          zIndex: 2,
          position: 'relative',
          textAlign: 'center',
          px: 2
        }}
      >
        خودرو ایده‌آل خودتو پیدا کن
      </Typography>
      <SearchBar />
    </Grid>
  );
};
export default HomePageHeader;
