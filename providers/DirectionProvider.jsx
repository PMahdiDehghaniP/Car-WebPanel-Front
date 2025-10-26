'use client';
import { useAppSelector } from '@/hooks/reduxHooks';
import createRtlCache from '@/theme/RTLCache';
import { CacheProvider } from '@emotion/react';
import { useEffect } from 'react';

const DirectionProvider = ({ children }) => {
  const { direction } = useAppSelector((state) => state.systemSetting);
  const rtlCache = createRtlCache();
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.dir = direction;
    }
  }, [direction]);

  if (direction === 'ltr') return children;
  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
};
export default DirectionProvider;
