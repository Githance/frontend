import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/services';
import token from '~/utils/token';
import { refreshToken } from './refresh-token-slice';

/* Слайс предназначен для хранения состояний пользователя, 
 которые используются глобально в приложении. Статус авторизации,
 уровень доступа и т.п
 */

export const checkUserAuth = createAsyncThunk(
  'userSlice/checkUserAuth',
  async (_, { dispatch }) => {
    if (token.getToken('accessToken')) {
      dispatch(refreshToken())
        .then(() => {
          dispatch(userIsAuth());
        })
        .catch(() => {
          dispatch(userNotAuth());
        })
        .finally(() => {
          dispatch(userIsCheck());
        });
    } else {
      dispatch(userIsCheck());
    }
  },
);

type InitialState = {
  isAuth: boolean;
  isAuthCheck: boolean;
  userId: number | null;
};

const initialState: InitialState = {
  isAuth: false,
  isAuthCheck: false,
  userId: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userIsAuth(state) {
      state.isAuth = true;
    },
    userNotAuth(state) {
      state.isAuth = false;
    },
    userIsCheck(state) {
      state.isAuthCheck = true;
    },
    addUserId(state, action) {
      state.userId = action.payload;
    },
    deleteUserId(state) {
      state.userId = null;
    },
  },
});

// Actions
export const { userIsAuth, userNotAuth, addUserId, deleteUserId, userIsCheck } = userSlice.actions;

// Selectors
export const getIsAuth = (state: RootState) => state.user.isAuth;
export const getIsAuthCheck = (state: RootState) => state.user.isAuthCheck;
export const getUserId = (state: RootState) => state.user.userId;

// Reducers
export default userSlice.reducer;
