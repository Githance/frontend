import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/Api';

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
    resetPasswordRequest: null,
    resetPasswordError: null,

    confirmPasswordRequest: null,
    confirmPasswordError: null,

    resendEmailRequest: null,
    resendEmailError: null,
  },

  reducers: {},

  extraReducers: (builder) => {
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
