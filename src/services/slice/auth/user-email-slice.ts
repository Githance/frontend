import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/services';

type InitialState = {
  userEmail: string | null;
};

const initialState: InitialState = {
  userEmail: null,
};

const userEmailSlice = createSlice({
  name: 'userEmailSlice',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.userEmail = action.payload;
    },
    resetEmail(state) {
      state.userEmail = null;
    },
  },
});

// Actions
export const { setEmail, resetEmail } = userEmailSlice.actions;

// Selectors
export const getUserEmail = (store: RootState) => store.userEmail.userEmail;

// Reducers
export default userEmailSlice.reducer;
