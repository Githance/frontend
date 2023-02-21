/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/Api";
import token from "../../utils/token";

export const fetchGoogleDate = createAsyncThunk(
  "userAuth/fetchGoogleDate",
  (googleCode) =>
    api.googleAuthRequest(googleCode).then((res) => {
      token.setToken("accessToken", res.access_token);
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
  (userData, { rejectWithValue }) =>
    api
      .userLoginRequest(userData)
      .then((res) => {
        token.setToken("accessToken", res.access_token);
      })
      .catch((err) => rejectWithValue(err.response.data))
);

export const logoutUser = createAsyncThunk("userAuthSlice/logoutUser", () =>
  api.userLogoutRequest().then(() => {
    token.deleteToken("accessToken");
  })
);

export const confirmUserEmail = createAsyncThunk(
  "userAuthSlice/confirmUserEmail",
  (userEmail) => api.confirmEmailRequest(userEmail)
);

export const resetUserPassword = createAsyncThunk(
  "userAuthSlice/resetUserPassword",
  (userEmail, { rejectWithValue }) =>
    api
      .userResetPasswordRequest(userEmail)
      .catch((err) => rejectWithValue(err.response.data))
);

export const confirmUserPassword = createAsyncThunk(
  "userAuthSlice/confirmUserPassword",
  (userData, { rejectWithValue }) =>
    api
      .userConfirmPasswordRequest(userData)
      .catch((err) => rejectWithValue(err.response.data))
);

export const resendUserEmail = createAsyncThunk(
  "userAuthSlice/resendUserEmail",
  (userEmail) => api.resendEmailRequest(userEmail)
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
    userEmail: null,

    googleRequest: null,
    googleError: null,

    loginRequest: null,
    loginError: null,
    loginErrorText: null,

    logoutRequest: null,
    logoutError: null,

    registerRequest: null,
    registerError: null,

    confirmEmailRequest: null,
    confirmEmailError: null,

    resetPasswordRequest: null,
    resetPasswordError: null,

    confirmPasswordRequest: null,
    confirmPasswordError: null,

    resendEmailRequest: null,
    resendEmailError: null,
  },

  reducers: {
    setEmail(state, action) {
      state.userEmail = action.payload;
    },
    resetEmail(state) {
      state.userEmail = null;
    },
    resetLoginError(state) {
      state.loginError = null;
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
    builder.addCase(registerUser.rejected, (state) => {
      state.registerRequest = null;
      state.registerError = true;
    });

    // TODO: Авторизация пользователя
    builder.addCase(loginUser.pending, (state) => {
      state.loginRequest = true;
      state.loginErrorText = null;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isAuth = true;
      state.loginRequest = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginRequest = null;
      state.loginError = true;
      if (action.payload.non_field_errors) {
        state.loginErrorText = action.payload;
      }
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

    // TODO: Запрос смены пароля
    builder.addCase(resetUserPassword.pending, (state) => {
      state.resetPasswordRequest = true;
    });
    builder.addCase(resetUserPassword.fulfilled, (state) => {
      state.resetPasswordRequest = null;
    });
    builder.addCase(resetUserPassword.rejected, (state) => {
      state.resetPasswordRequest = null;
      state.resetPasswordError = true;
    });

    // TODO: Запрос нового пароля
    builder.addCase(confirmUserPassword.pending, (state) => {
      state.confirmPasswordRequest = true;
    });
    builder.addCase(confirmUserPassword.fulfilled, (state) => {
      state.confirmPasswordRequest = null;
    });
    builder.addCase(confirmUserPassword.rejected, (state) => {
      state.confirmPasswordRequest = null;
      state.confirmPasswordError = true;
    });

    // TODO: Повторная отправка ссылки для смены пароля на почту
    builder.addCase(resendUserEmail.pending, (state) => {
      state.resendEmailRequest = true;
    });
    builder.addCase(resendUserEmail.fulfilled, (state) => {
      state.resendEmailRequest = null;
    });
    builder.addCase(resendUserEmail.rejected, (state) => {
      state.resendEmailRequest = null;
      state.resendEmailError = true;
    });
  },
});

export const { setEmail, resetEmail } = userAuthSlice.actions;

export default userAuthSlice.reducer;
