/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchGoogleDate = createAsyncThunk(
  "userAuth/fetchGoogleDate",
  (googleCode) => {
    api.googleAuthRequest(googleCode);
  }
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
    request: null,
    error: null,
  },
  reducers: {
    userlogIn(state) {
      state.isAuth = true;
    },

    userlogOut(state) {
      state.isAuth = false;
      state.request = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGoogleDate.pending, (state) => {
      state.request = true;
    });
    builder.addCase(fetchGoogleDate.fulfilled, (state) => {
      state.isAuth = true;
      state.request = null;
    });
    builder.addCase(fetchGoogleDate.rejected, (state) => {
      state.request = null;
      state.error = true;
    });
  },
});

export const { userlogIn, userlogOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
