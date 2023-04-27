import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '~/api';
import { ConfirmEmailType, RegisterType } from '~/api/api-types';

type RegisterRejectValue = {
  name?: string[] | undefined;
  email?: string[] | undefined;
  password1?: string[] | undefined;
};

export const registerUser = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  RegisterType,
  // Types for ThunkAPI
  {
    rejectValue: RegisterRejectValue;
  }
>('userAuthSlice/registerUser', (userData, { rejectWithValue }) =>
  auth.userRegisterRequest(userData).catch((err) => rejectWithValue(err.response.data)),
);

export const confirmUserEmail = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  ConfirmEmailType
>('userAuthSlice/confirmUserEmail', (userEmail) => {
  auth.confirmEmailRequest(userEmail);
});

type InitialState = {
  registerRequest: boolean | null;
  registerError: boolean | null;

  confirmEmailRequest: boolean | null;
  confirmEmailError: boolean | null;
};

const initialState: InitialState = {
  registerRequest: null,
  registerError: null,

  confirmEmailRequest: null,
  confirmEmailError: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
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

    builder.addCase(confirmUserEmail.pending, (state) => {
      state.confirmEmailRequest = true;
    });
    builder.addCase(confirmUserEmail.fulfilled, (state) => {
      state.confirmEmailRequest = null;
    });
    builder.addCase(confirmUserEmail.rejected, (state) => {
      state.confirmEmailRequest = null;
      state.confirmEmailError = true;
    });
  },
});

export default userAuthSlice.reducer;
