import { configureStore } from '@reduxjs/toolkit';
import linksReducer from '../components/LinkList/linksSlice';

export const store = configureStore({
  reducer: {
    links: linksReducer,
  },
});
