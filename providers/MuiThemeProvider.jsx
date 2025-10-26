'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { darkTheme, lightTheme } from '@/theme/theme';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useMemo } from 'react';

export default function MuiThemeProvider({ children }) {
  const { theme } = useAppSelector((state) => state.theme);
  const { direction } = useAppSelector((state) => state.systemSetting);
  const muiTheme = useMemo(
    () =>
      theme === 'dark'
        ? darkTheme(direction === 'rtl')
        : lightTheme(direction === 'rtl'),
    [theme, direction]
  );
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
