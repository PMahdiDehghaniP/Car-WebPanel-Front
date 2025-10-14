'use client';
import { useTheme } from '@mui/material';

const AuthLogo = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <img
      src={isDarkMode ? '/garajinoLogoDark.png' : '/garajinoLogoLight.png'}
      alt="Logo"
    />
  );
};
export default AuthLogo;

