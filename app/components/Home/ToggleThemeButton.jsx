'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setMuiTheme } from '@/lib/store/slices/themeSlice';
import { DarkMode, Sunny } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ToggleThemeButton = ({ styles }) => {
  const { theme: themeStatus } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <IconButton
      onClick={() =>
        dispatch(setMuiTheme(themeStatus === 'dark' ? 'light' : 'dark'))
      }
      sx={{
        ...styles,
        '&:hover': {
          backgroundColor: themeStatus === 'dark' ? 'gray' : '#050B20'
        },
        position: 'absolute',
        top: 7,
        left: 5,
        zIndex: 999,
        borderRadius: '1000px',
        color: 'yellow',
        backgroundColor: themeStatus === 'dark' ? 'gray' : '#050B20'
      }}
    >
      {themeStatus === 'dark' ? <Sunny /> : <DarkMode />}
    </IconButton>
  );
};
export default ToggleThemeButton;
