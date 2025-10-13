import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebarSlice';
import { themeReducer } from './slices/themeSlice';
import { systemSettingReducer } from './slices/systemSettingSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarReducer,
      theme: themeReducer,
      systemSetting: systemSettingReducer
    },
    middleware: (getDefalutMiddleware) =>
      getDefalutMiddleware({
        serializableCheck: false
      }).concat()
    // we will add our middlewares here
  });
export default makeStore;

