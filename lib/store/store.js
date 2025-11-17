import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebarSlice';
import { themeReducer } from './slices/themeSlice';
import { systemSettingReducer } from './slices/systemSettingSlice';
import authReducer from './slices/authSlice';
import uiReducer from './slices/uiSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      sidebar: sidebarReducer,
      theme: themeReducer,
      systemSetting: systemSettingReducer,
      auth: authReducer
    },
    middleware: (getDefalutMiddleware) =>
      getDefalutMiddleware({
        serializableCheck: false
      }).concat()
    // we will add our middlewares here
  });
export default makeStore;
