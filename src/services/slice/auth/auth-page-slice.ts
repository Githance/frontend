import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userIsAuth, userNotAuth } from './user-slice';
import { RootState } from '~/services';
import api, { LoginType } from '../../../api/Api';
import token from '../../../utils/token';

export const loginWithGoogle = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  string
>('authPageSLice/logiWithGoogle', (googleCode, { dispatch }) =>
  api.googleAuthRequest(googleCode).then((res) => {
    token.setToken('accessToken', res.access_token);
    dispatch(userIsAuth());
  }),
);

type LoginRejectValue = {
  email?: string[] | undefined;
  non_field_errors?: string[] | undefined;
};

export const loginUser = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  LoginType,
  // Types for ThunkAPI
  {
    rejectValue: LoginRejectValue;
  }
>('authPageSLice/loginUser', (userData, { rejectWithValue, dispatch }) =>
  api
    .userLoginRequest(userData)
    .then((res) => {
      token.setToken('accessToken', res.access_token);
      dispatch(userIsAuth());
    })
    .catch((err) => rejectWithValue(err.response.data)),
);

export const logoutUser = createAsyncThunk('authPageSLice/logoutUser', (_, { dispatch }) =>
  api.userLogoutRequest().then(() => {
    token.deleteToken('accessToken');
    dispatch(userNotAuth());
  }),
);

type InitialState = {
  googleRequest: boolean | null;
  googleError: boolean | null;
  loginRequest: boolean | null;
  loginError: boolean | null;
  loginErrorText: LoginRejectValue | undefined;
  logoutRequest: boolean | null;
  logoutError: boolean | null;
};

const initialState: InitialState = {
  googleRequest: null,
  googleError: null,

  loginRequest: null,
  loginError: null,
  loginErrorText: undefined,

  logoutRequest: null,
  logoutError: null,
};

const authPageSLice = createSlice({
  name: 'authPageSLice',
  initialState,
  reducers: {
    resetLoginError(state) {
      state.loginError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.pending, (state) => {
      state.googleRequest = true;
    });
    builder.addCase(loginWithGoogle.fulfilled, (state) => {
      state.googleRequest = null;
    });
    builder.addCase(loginWithGoogle.rejected, (state) => {
      state.googleRequest = null;
      state.googleError = true;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loginRequest = true;
      state.loginErrorText = undefined;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loginRequest = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginRequest = null;
      state.loginError = true;
      if (action.payload?.non_field_errors) {
        state.loginErrorText = action.payload;
      }
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.logoutRequest = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.logoutRequest = null;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.logoutRequest = null;
      state.logoutError = true;
    });
  },
});

// Actions
export const { resetLoginError } = authPageSLice.actions;

// Selectors
export const getLoginError = (store: RootState) => store.authUser.loginError;
export const getLoginErrorText = (store: RootState) => store.authUser.loginErrorText;

// Reducers
export default authPageSLice.reducer;
