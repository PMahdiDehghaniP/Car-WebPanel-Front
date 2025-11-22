'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setMuiTheme } from '@/lib/store/slices/themeSlice';
import { DarkMode, Sunny } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';

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
        position: 'absolute',
        top: 9,
        left: 9,
        zIndex: 999,
        borderRadius: '1000px'
      }}
    >
      {themeStatus === 'dark' ? (
        <MdOutlineDarkMode size={30} color="#fff" />
      ) : (
        <MdOutlineWbSunny size={30} color="#000" />
      )}
    </IconButton>
  );
};
export default ToggleThemeButton;
