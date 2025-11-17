'use client';
import { perfectCentering } from '@/app/constants/Styles';
import { Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';

const CarTaxItem = ({ title, amount, icon }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '0.75rem',
        height: '4rem'
      }}
    >
      <Box
        sx={{
          ...perfectCentering,
          borderRadius: '100%',
          flexShrink: 0,
          width: { xs: '3rem', lg: '5rem' },
          height: { xs: '3rem', lg: '5rem' },
          boxShadow: '0 4px 4px #00000040',
          border: '1px solid #ABABAB',
          backgroundColor: theme.palette.colors.taxItemBg
        }}
      >
        {icon}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '0.25rem'
        }}
      >
        <Typography sx={{ fontSize: { xs: '0.75rem', md: '2rem' } }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.5rem', md: '1.5rem' } }}>
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default CarTaxItem;
