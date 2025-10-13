import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebarSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarReducer
    },
    middleware: (getDefalutMiddleware) =>
      getDefalutMiddleware({
        serializableCheck: false
      }).concat()
    // we will add our middlewares here
  });
export default makeStore;

