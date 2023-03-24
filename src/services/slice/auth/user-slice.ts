import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/services';
import api from '../../../api/Api';
import token from '../../../utils/token';

/* Слайс предназначен для хранения состояний пользователя, 
 которые используются глобально в приложении. Статус авторизации,
 уровень доступа и т.п
 */

type InitialState = {
  isAuth: boolean;
};

const initialState: InitialState = {
  isAuth: false,
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
  },
});

// Actions
export const { userIsAuth, userNotAuth } = userSlice.actions;

// Selectors
export const checkAuth = (state: RootState) => state.user.isAuth;

// Reducers
export default userSlice.reducer;
