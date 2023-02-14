/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
  name: "isAuth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    logIn(state) {
      state.isAuth = true;
    },

    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const { logIn, logOut } = isAuthSlice.actions;
export default isAuthSlice.reducer;
