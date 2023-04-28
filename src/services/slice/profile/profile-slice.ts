import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '~/services';
import { users } from '~/api/index';
import { CurrentUserRequest } from '~/api/api-types';

type PatchCurrentUserData = {
  data: CurrentUserRequest;
  token: string;
};

export const getCurrentUserData = createAsyncThunk<void, string | null>(
  'profileSlice/getCurrentUserData',
  (token, { fulfillWithValue }) => {
    return users.getCurrenUserDataRequest(token).then((res) => fulfillWithValue(res));
  },
);

export const patchCurrentUserData = createAsyncThunk<void, PatchCurrentUserData>(
  'profileSlice/patchCurrentUserData',
  ({ data, token }, { fulfillWithValue }) => {
    return users.patchCurrenUserDataRequest(data, token).then((res) => fulfillWithValue(res));
  },
);

export const getSelectedUserData = createAsyncThunk<void, string | undefined>(
  'profileSlice/getSelectedUserData',
  (id, { fulfillWithValue }) => {
    return users.getSelectedUserDataRequest(id).then((res) => fulfillWithValue(res));
  },
);

type InitialState = {
  getCurrentUserRequest: boolean | null;
  getCurrentUserError: boolean | null;
  patchCurrentUserRequest: boolean | null;
  patchCurrentUserError: boolean | null;
  selectedUserRequest: boolean | null;
  selectedUserError: boolean | null;
};

const initialState: InitialState = {
  getCurrentUserRequest: null,
  getCurrentUserError: null,
  patchCurrentUserRequest: null,
  patchCurrentUserError: null,
  selectedUserRequest: null,
  selectedUserError: null,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCurrentUserData.pending, (state) => {
      state.getCurrentUserRequest = true;
    });
    builder.addCase(getCurrentUserData.fulfilled, (state) => {
      state.getCurrentUserRequest = null;
    });
    builder.addCase(getCurrentUserData.rejected, (state) => {
      state.getCurrentUserRequest = null;
      state.getCurrentUserError = true;
    });

    builder.addCase(patchCurrentUserData.pending, (state) => {
      state.patchCurrentUserRequest = true;
    });
    builder.addCase(patchCurrentUserData.fulfilled, (state) => {
      state.patchCurrentUserRequest = null;
    });
    builder.addCase(patchCurrentUserData.rejected, (state) => {
      state.patchCurrentUserRequest = null;
      state.patchCurrentUserError = true;
    });

    builder.addCase(getSelectedUserData.pending, (state) => {
      state.selectedUserRequest = true;
    });
    builder.addCase(getSelectedUserData.fulfilled, (state) => {
      state.selectedUserRequest = null;
    });
    builder.addCase(getSelectedUserData.rejected, (state) => {
      state.selectedUserRequest = null;
      state.selectedUserRequest = true;
    });
  },
});

// Actions

// Selectors
export const getCurrentUserRequestState = (store: RootState) => store.profile.getCurrentUserRequest;
export const getSelectedUserRequestState = (store: RootState) => store.profile.selectedUserRequest;

// Reducers
export default profileSlice.reducer;
