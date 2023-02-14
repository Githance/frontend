/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
/* import api from "../../api/api"; */

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
    status: null,
    error: null,
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

export const { userlogIn, userlogOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
