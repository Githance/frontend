import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { userIsAuth, userNotAuth } from './user-slice';
import { RootState } from '~/services';
import api from '../../../api/Api';
import token from '../../../utils/token';

export const logiWithGoogle = createAsyncThunk(
  'authPageSLice/logiWithGoogle',
  (googleCode, { dispatch }) =>
    api.googleAuthRequest(googleCode).then((res) => {
      token.setToken('accessToken', res.access_token);
      dispatch(userIsAuth());
    }),
);

type LoginType = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  'authPageSLice/loginUser',
  (userData: LoginType, { rejectWithValue, dispatch }) =>
    api
      .userLoginRequest(userData)
      .then((res) => {
        token.setToken('accessToken', res.access_token);
        dispatch(userIsAuth());
      })
      .catch((err) => rejectWithValue(err.response.data)),
);

export const logoutUser = createAsyncThunk('authPageSLice/logoutUser', (_userData, { dispatch }) =>
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
  loginErrorText: string | null;
  logoutRequest: boolean | null;
  logoutError: boolean | null;
};

const initialState: InitialState = {
  googleRequest: null,
  googleError: null,

  loginRequest: null,
  loginError: null,
  loginErrorText: null,

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
    builder.addCase(logiWithGoogle.pending, (state) => {
      state.googleRequest = true;
    });
    builder.addCase(logiWithGoogle.fulfilled, (state) => {
      state.googleRequest = null;
    });
    builder.addCase(logiWithGoogle.rejected, (state) => {
      state.googleRequest = null;
      state.googleError = true;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loginRequest = true;
      state.loginErrorText = null;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loginRequest = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginRequest = null;
      state.loginError = true;
      if (action.payload.non_field_errors) {
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
export const getLoginError = (store: RootState) => store.userAuth.loginError;
export const getLoginErrorText = (store: RootState) => store.userAuth.loginErrorText;

// Reducers
export default authPageSLice.reducer;
