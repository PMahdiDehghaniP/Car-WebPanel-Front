'use client';
import createRtlCache from '@/theme/RTLCache';
import { CacheProvider } from '@emotion/react';

const DirectionProvider = ({ children, dir = 'rtl' }) => {
  if (dir === 'ltr') return children;
  const rtlCache = createRtlCache();
  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
};
export default DirectionProvider;

