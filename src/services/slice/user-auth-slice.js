/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/Api";
import cookie from "../../utils/cookie";

export const fetchGoogleDate = createAsyncThunk(
  "userAuth/fetchGoogleDate",
  (googleCode) => {
    api.googleAuthRequest(googleCode).then((res) => {
      cookie.setCookie("accessToken", res.data.access_token);
    });
  }
);

export const registerUser = createAsyncThunk(
  "userAuthSlice/registerUser",
  (userData) => {
    api
      .userRegisterRequest(userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
    request: null,
    error: null,
    errorText: null,
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
