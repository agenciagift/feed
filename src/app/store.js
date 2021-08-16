import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/search';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
