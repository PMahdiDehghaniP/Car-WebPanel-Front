'use client';

import makeStore from '@/lib/store/store';
import { createContext, useRef } from 'react';

export const StoreContext = createContext();
const StoreProvider = () => {
  const store = useRef(null);
  if (!store.current) {
    store.current = makeStore();
  }
  return (
    <StoreContext.Provider value={store.current}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;

