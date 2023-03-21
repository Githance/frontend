import { configureStore } from '@reduxjs/toolkit';
import userAuthSlice from './slice/user-auth-slice';

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
  },
});

export default store;
