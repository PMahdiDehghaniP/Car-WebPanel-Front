import { configureStore } from '@reduxjs/toolkit';

const makeStore = () =>
  configureStore({
    reducer: {
      // we will add our reducers here
    },
    middleware: (getDefalutMiddleware) =>
      getDefalutMiddleware({
        serializableCheck: false
      }).concat()
    // we will add our middlewares here
  });
export default makeStore;

