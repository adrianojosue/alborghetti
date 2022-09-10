import { configureStore } from '@reduxjs/toolkit';
/* import { itemsSlice } from './slices/items'; */
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    /* items: itemsSlice.reducer, */
    auth: authSlice.reducer,
  },
})