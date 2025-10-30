'use client';
import { Box, useTheme } from '@mui/material';
import CarsLogoSection from './CarsLogoSection';
import LogoCardHeader from './LogoCarsCardHeader';
import { perfectCentering } from '@/app/constants/Styles';

const LogoCarsCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...perfectCentering,
        width: '100vw',
        flexDirection: 'column',
        backgroundColor: theme.palette?.carLogoHeader?.background,
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
        height: {
          xs: '600px',
          sm: '500px',
          md: '450px',
          lg: '350px',
          xl: '350px'
        },
        gap: '1.5rem'
      }}
data-aos="zoom-in-left"
    >
      <LogoCardHeader />
      <CarsLogoSection />
    </Box>
  );
};
export default LogoCarsCard;
