import { configureStore } from '@reduxjs/toolkit';
import { innoloftApi } from './apicalls';
import { configSlice } from './config';


export const store = configureStore({
  reducer: {
    [innoloftApi.reducerPath]: innoloftApi.reducer,
    config: configSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(innoloftApi.middleware),
});