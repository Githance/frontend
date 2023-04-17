import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/services';

/* Слайс предназначен для хранения состояний пользователя, 
 которые используются глобально в приложении. Статус авторизации,
 уровень доступа и т.п
 */

type InitialState = {
  isAuth: boolean;
  userId: number | null;
};

const initialState: InitialState = {
  isAuth: false,
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
    addUserId(state, action) {
      state.userId = action.payload;
    },
    deleteUserId(state) {
      state.userId = null;
    },
  },
});

// Actions
export const { userIsAuth, userNotAuth, addUserId, deleteUserId } = userSlice.actions;

// Selectors
export const checkAuth = (state: RootState) => state.user.isAuth;
export const getUserId = (state: RootState) => state.user.userId;

// Reducers
export default userSlice.reducer;
