'use client';

import makeStore from '@/lib/store/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({ children }) => {
  const store = useRef(null);
  if (!store.current) {
    store.current = makeStore();
  }
  return <Provider store={store.current}>{children}</Provider>;
};
export default StoreProvider;

