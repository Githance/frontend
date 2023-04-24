import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { project } from '~/api';
import { RootState } from '~/services';

export const createProject = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/createProject', (data, { rejectWithValue, dispatch }) =>
  project
    .createProjectRequest(data)
    .then((res) => {
      dispatch(setProject(res));
      return res;
    })
    .catch((err) => rejectWithValue(err.response.data)),
);

export const getProjectByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/getProjectByID', (id, { rejectWithValue, dispatch }) =>
  project
    .getProjectByIDRequest(id)
    .then((res) => {
      dispatch(setProject(res));
    })
    .catch((err) => rejectWithValue(err.response.data)),
);
export const deleteUserProjectByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/deleteProjectByID', (id, { rejectWithValue }) =>
  project.deleteProjectByIDRequest(id).catch((err) => rejectWithValue(err.response.data)),
);
export const updateUserProjectByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/updateProjectByID', ({ id, data }, { rejectWithValue, dispatch }) =>
  project
    .updateProjectByIDRequest({ id, data })
    .then((res) => {
      dispatch(setProject(res));
    })
    .catch((err) => rejectWithValue(err.response.data)),
);
export type TProject = {
  id: number;
  name: string;
  intro: string;
  description: string;
  status: 'idea' | 'vacancy' | 'in_progress' | 'closed';
  owner: {
    id: number;
    name: string;
  };
  telegram: string;
  email: string;
};
type InitialState = {
  createProjectRequest: boolean | null;
  createProjectError: boolean | null;
  getProjectByIDRequest: boolean | null;
  getProjectByIDError: boolean | null;
  deleteProjectByIDRequest: boolean | null;
  deleteProjectByIDError: boolean | null;
  updateProjectByIDRequest: boolean | null;
  updateProjectByIDError: boolean | null;
  project: TProject | null;
};

const initialState: InitialState = {
  createProjectRequest: null,
  createProjectError: null,

  getProjectByIDRequest: null,
  getProjectByIDError: null,

  deleteProjectByIDRequest: null,
  deleteProjectByIDError: null,

  updateProjectByIDRequest: null,
  updateProjectByIDError: null,

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
    // СОЗДАНИЕ ПРОЕКТА
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
    // ПОИСК ПРОЕКТА
    builder.addCase(getProjectByID.pending, (state) => {
      state.getProjectByIDRequest = true;
    });
    builder.addCase(getProjectByID.fulfilled, (state) => {
      state.getProjectByIDRequest = null;
    });
    builder.addCase(getProjectByID.rejected, (state) => {
      state.getProjectByIDRequest = null;
      state.getProjectByIDError = true;
    });
    // УДАЛЕНИЕ ПРОЕКТА
    builder.addCase(deleteUserProjectByID.pending, (state) => {
      state.deleteProjectByIDRequest = true;
    });
    builder.addCase(deleteUserProjectByID.fulfilled, (state) => {
      state.deleteProjectByIDRequest = null;
    });
    builder.addCase(deleteUserProjectByID.rejected, (state) => {
      state.deleteProjectByIDRequest = null;
      state.deleteProjectByIDError = true;
    });
    // ОБНОВИТЬ ПРОЕКТ
    builder.addCase(updateUserProjectByID.pending, (state) => {
      state.updateProjectByIDRequest = true;
    });
    builder.addCase(updateUserProjectByID.fulfilled, (state) => {
      state.updateProjectByIDRequest = null;
    });
    builder.addCase(updateUserProjectByID.rejected, (state) => {
      state.updateProjectByIDRequest = null;
      state.updateProjectByIDError = true;
    });
  },
});

// Actions
export const { setProject } = projectSlice.actions;
// Selectors
export const getProject = (state: RootState) => state.project.project;
// Reducers
export default projectSlice.reducer;
