/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    userlogIn(state) {
      state.isAuth = true;
    },

    userlogOut(state) {
      state.isAuth = false;
    },
  },
});

export const { logIn, logOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
