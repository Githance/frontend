import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/Api';

export const registerUser = createAsyncThunk(
  'userAuthSlice/registerUser',
  (userData, { rejectWithValue }) =>
    api.userRegisterRequest(userData).catch((err) => rejectWithValue(err.response.data)),
);

export const confirmUserEmail = createAsyncThunk('userAuthSlice/confirmUserEmail', (userEmail) =>
  api.confirmEmailRequest(userEmail),
);

export const resetUserPassword = createAsyncThunk(
  'userAuthSlice/resetUserPassword',
  (userEmail, { rejectWithValue }) =>
    api.userResetPasswordRequest(userEmail).catch((err) => rejectWithValue(err.response.data)),
);

export const confirmUserPassword = createAsyncThunk(
  'userAuthSlice/confirmUserPassword',
  (userData, { rejectWithValue }) =>
    api.userConfirmPasswordRequest(userData).catch((err) => rejectWithValue(err.response.data)),
);

export const resendUserEmail = createAsyncThunk('userAuthSlice/resendUserEmail', (userEmail) =>
  api.resendEmailRequest(userEmail),
);

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
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

  reducers: {},

  extraReducers: (builder) => {
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

export default userAuthSlice.reducer;
