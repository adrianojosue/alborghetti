import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './items';
import { authSlice } from './auth';
import { bagSlice } from './bag';
import { langSlice } from './lang';

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    auth: authSlice.reducer,
    bag: bagSlice.reducer,
    lang: langSlice.reducer,
  },
})