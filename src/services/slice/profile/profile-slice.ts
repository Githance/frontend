import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/services';
import { users } from '~/api/index';

export const getCurrentUserData = createAsyncThunk<void, string | null>(
  'initialState/getCurrentUserData',
  (token, { fulfillWithValue }) => {
    return users.getCurrenUserDataRequest(token).then((res) => fulfillWithValue(res));
  },
);

type InitialState = {
  currentUserRequest: boolean | null;
  currentUserError: boolean | null;
  selectedUserRequest: boolean | null;
  selectedUserError: boolean | null;
};

const initialState: InitialState = {
  currentUserRequest: null,
  currentUserError: null,
  selectedUserRequest: null,
  selectedUserError: null,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCurrentUserData.pending, (state) => {
      state.currentUserRequest = true;
    });
    builder.addCase(getCurrentUserData.fulfilled, (state) => {
      state.currentUserRequest = null;
    });
    builder.addCase(getCurrentUserData.rejected, (state) => {
      state.currentUserRequest = null;
      state.currentUserError = true;
    });
  },
});

// Actions

// Selectors
export const getCurrentUserRequestState = (store: RootState) => store.profile.currentUserRequest;
export const getSelectedUserRequestState = (store: RootState) => store.profile.selectedUserRequest;

// Reducers
export default profileSlice.reducer;
