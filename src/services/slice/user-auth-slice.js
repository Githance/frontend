/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/Api";
import cookie from "../../utils/cookie";

export const fetchGoogleDate = createAsyncThunk(
  "userAuth/fetchGoogleDate",
  (googleCode) =>
    api.googleAuthRequest(googleCode).then((res) => {
      cookie.setCookie("accessToken", res.data.access_token);
    })
);

export const registerUser = createAsyncThunk(
  "userAuthSlice/registerUser",
  (userData) => api.userRegisterRequest(userData).then(() => console.log("1"))
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
    googleRequest: null,
    googleError: null,
    googleErrorText: null,

    registerRequest: null,
    registerError: null,
    registerErrorText: null,
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
    // TODO: Регистрация через Google аккаунт
    builder.addCase(fetchGoogleDate.pending, (state) => {
      state.googleRequest = true;
    });
    builder.addCase(fetchGoogleDate.fulfilled, (state) => {
      state.isAuth = true;
      state.googleRequest = null;
    });
    builder.addCase(fetchGoogleDate.rejected, (state) => {
      state.googleRequest = null;
      state.googleError = true;
    });

    // TODO: Регистрация с помощью почты и пароля
    builder.addCase(registerUser.pending, (state) => {
      state.registerRequest = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.registerRequest = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerRequest = null;
      state.registerError = true;
      state.registerErrorText = action.payload;
    });
  },
});

export const { userlogIn, userlogOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
