import { configureStore } from "@reduxjs/toolkit";
import isAuthSlice from "./slice/google-auth-slice";

const store = configureStore({
  reducer: {
    isAuthSlice,
  },
});

export default store;
