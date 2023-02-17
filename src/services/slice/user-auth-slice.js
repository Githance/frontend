/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/Api";
import cookie from "../../utils/cookie";

export const fetchGoogleDate = createAsyncThunk(
  "userAuth/fetchGoogleDate",
  (googleCode) =>
    api.googleAuthRequest(googleCode).then((res) => {
      cookie.setCookie("accessToken", res.access_token);
    })
);

export const registerUser = createAsyncThunk(
  "userAuthSlice/registerUser",
  (userData, { rejectWithValue }) =>
    api
      .userRegisterRequest(userData)
      .catch((err) => rejectWithValue(err.response.data))
);

export const loginUser = createAsyncThunk(
  "userAuthSlice/loginUser",
  (userData) =>
    api.userLoginRequest(userData).then((res) => {
      cookie.setCookie("accessToken", res.access_token);
    })
);

export const logoutUser = createAsyncThunk("userAuthSlice/logoutUser", () =>
  api.userLogoutRequest().then(() => {
    cookie.deleteCookie("accessToken");
  })
);

export const confirmUserEmail = createAsyncThunk(
  "userAuthSlice/confirmUserEmail",
  (userEmail) => api.confirmEmailRequest(userEmail)
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,

    googleRequest: null,
    googleError: null,    

    loginRequest: null,
    loginError: null,

    logoutRequest: null,
    logoutError: null,

    registerRequest: null,
    registerError: null,
    registerErrorText: null,

    confirmEmailRequest: null,
    confirmEmailError: null,
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

    // TODO: Авторизация пользователя
    builder.addCase(loginUser.pending, (state) => {
      state.loginRequest = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isAuth = true;
      state.loginRequest = null;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loginRequest = null;
      state.loginError = true;      
    });

    // TODO: Выход пользователя из аккаунта пользователя
    builder.addCase(logoutUser.pending, (state) => {
      state.logoutRequest = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isAuth = false;
      state.logoutRequest = null;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.logoutRequest = null;
      state.logoutError = true;
    });

    // TODO: Подтверждение почты пользователя
    builder.addCase(confirmUserEmail.pending, (state) => {
      state.confirmEmailRequest = true;
    });
    builder.addCase(confirmUserEmail.fulfilled, (state) => {
      state.isAuth = true;
      state.confirmEmailRequest = null;
    });
    builder.addCase(confirmUserEmail.rejected, (state) => {
      state.confirmEmailRequest = null;
      state.confirmEmailError = true;      
    });
  },
});

export const { setRegisterError } = userAuthSlice.actions;

export default userAuthSlice.reducer;
