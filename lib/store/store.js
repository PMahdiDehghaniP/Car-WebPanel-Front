import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebarSlice';
import { themeReducer } from './slices/themeSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarReducer,
      theme: themeReducer
    },
    middleware: (getDefalutMiddleware) =>
      getDefalutMiddleware({
        serializableCheck: false
      }).concat()
    // we will add our middlewares here
  });
export default makeStore;

