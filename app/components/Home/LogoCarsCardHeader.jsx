'use client';

import { Box, Typography, useTheme } from '@mui/material';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';

const LogoCardHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '75%'
      }}
    >
      <Typography sx={{ fontSize: '1.8rem' }}>برند های معتبر</Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          color: theme.palette?.carLogoHeader?.allBrandsColor,
          display: 'flex',
          gap: '2px'
        }}
      >
        <CallMadeOutlinedIcon fontSize="medium" />
        نشان دادن همه برند ها
      </Typography>
    </Box>
  );
};
export default LogoCardHeader;
