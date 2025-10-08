import createRtlCache from '@/theme/RTLCache';
import { CacheProvider } from '@emotion/react';

const DirectionProvider = ({ children, dir = 'rtl' }) => {
  if (dir === 'ltr') return children;
  const rtlCache = createRtlCache();
  return <CacheProvider cache={rtlCache}>{children}</CacheProvider>;
};
export default DirectionProvider;

