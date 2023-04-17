import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '~/api';
import { ResetPasswordType, ResendEmailType, ConfirmPasswordType } from '~/api/api-types';

type ResetUserRejectValue = {
  email: string;
};

type ConfirmUserPasswordRejectValue = {
  new_password2: string;
};

export const resetUserPassword = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  ResetPasswordType,
  // Types for ThunkAPI
  {
    rejectValue: ResetUserRejectValue;
  }
>('resetPageSlice/resetUserPassword', (userEmail, { rejectWithValue }) =>
  auth.userResetPasswordRequest(userEmail).catch((err) => rejectWithValue(err.response.data)),
);

export const confirmUserPassword = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  ConfirmPasswordType,
  // Types for ThunkAPI
  {
    rejectValue: ConfirmUserPasswordRejectValue;
  }
>('resetPageSlice/confirmUserPassword', (userData, { rejectWithValue }) =>
  auth.userConfirmPasswordRequest(userData).catch((err) => rejectWithValue(err.response.data)),
);

export const resendUserEmail = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  ResendEmailType
>('resetPageSlice/resendUserEmail', (userEmail) => auth.resendEmailRequest(userEmail));

type InitialState = {
  resetPasswordRequest: boolean | null;
  resetPasswordError: boolean | null;

  confirmPasswordRequest: boolean | null;
  confirmPasswordError: boolean | null;

  resendEmailRequest: boolean | null;
  resendEmailError: boolean | null;
};

const initialState: InitialState = {
  resetPasswordRequest: null,
  resetPasswordError: null,

  confirmPasswordRequest: null,
  confirmPasswordError: null,

  resendEmailRequest: null,
  resendEmailError: null,
};

const resetPageSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
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

export default resetPageSlice.reducer;
