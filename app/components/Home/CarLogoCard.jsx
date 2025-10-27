'use client';
import { perfectCentering } from '@/app/constants/Styles';
import { Box, Typography, useTheme } from '@mui/material';

const CarLogoCard = ({ logoSrc, carName }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...perfectCentering,
        flexDirection: 'column',
        width: '8.5rem',
        height: '9rem',
        backgroundColor: theme.palette?.carLogoCard?.background,
        borderRadius: '1rem',
        gap: '0.5rem',
        border: `1px solid ${theme.palette?.carLogoCard?.borderColor}`
      }}
    >
      <Box width="90px" height="90px" sx={{ ...perfectCentering }}>
        <img src={logoSrc} />
      </Box>

      <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
        {carName}
      </Typography>
    </Box>
  );
};

export default CarLogoCard;
