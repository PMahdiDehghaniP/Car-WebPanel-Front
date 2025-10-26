'use client';
import { Box, Typography, useTheme } from '@mui/material';
import { perfectCentering } from '../constants/Styles';

const CarLogoCard = ({ logoSrc, carName }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...perfectCentering,
        flexDirection: 'column',
        width: '10rem',
        height: '10rem',
        backgroundColor: theme.palette?.carLogoCard?.background,
        borderRadius: '1rem',
        gap: '0.5rem'
      }}
    >
      <Box width="100px" height="100px" sx={{ ...perfectCentering }}>
        <img src={logoSrc} />
      </Box>

      <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
        {carName}
      </Typography>
    </Box>
  );
};

export default CarLogoCard;
