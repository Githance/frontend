import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userIsAuth } from '../../actions';
import { auth, project } from '~/api';
import { ConfirmEmailType, RegisterType } from '~/api/api-types';
import { RootState } from '~/services';

export const createProject = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/createProject', (data, { rejectWithValue }) =>
  project.createProjectRequest(data).catch((err) => rejectWithValue(err.response.data)),
);

type InitialState = {
  createProjectRequest: boolean | null;
  createProjectError: boolean | null;
  project: any;
};

const initialState: InitialState = {
  createProjectRequest: null,
  createProjectError: null,
  project: null,
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createProject.pending, (state) => {
      state.createProjectRequest = true;
    });
    builder.addCase(createProject.fulfilled, (state) => {
      state.createProjectRequest = null;
    });
    builder.addCase(createProject.rejected, (state) => {
      state.createProjectRequest = null;
      state.createProjectError = true;
    });
  },
});

// Actions
export const { setProject } = projectSlice.actions;
// Selectors
export const getProject = (state: RootState) => state.project.project;
// Reducers
export default projectSlice.reducer;
