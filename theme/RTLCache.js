import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';

const createRtlCache = () =>
  createCache({
    key: 'rtl-mui',
    stylisPlugins: [prefixer, stylisRTLPlugin]
  });

export default createRtlCache;
