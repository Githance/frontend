import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '~/api';
import { RootState } from '~/services';
import token from '~/utils/token';

export const refreshToken = createAsyncThunk('refreshTokenSlice/refreshToken', () =>
  auth.refreshTokenRequest().then((res) => {
    token.setToken('accessToken', res.access);
  }),
);

type InitialState = {
  refreshTokenRequest: boolean | null;
  refreshTokenError: boolean | null;
};

const initialState: InitialState = {
  refreshTokenRequest: null,
  refreshTokenError: null,
};

const refreshTokenSlice = createSlice({
  name: 'refreshTokenSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(refreshToken.pending, (state) => {
      state.refreshTokenRequest = true;
    });
    builder.addCase(refreshToken.fulfilled, (state) => {
      state.refreshTokenRequest = null;
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.refreshTokenRequest = null;
      state.refreshTokenError = true;
    });
  },
});

// Actions

// Selectors
export const getRefreshTokenError = (store: RootState) => store.refreshToken.refreshTokenError;

// Reducers
export default refreshTokenSlice.reducer;
