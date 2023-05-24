import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { project } from '~/api';
import { TProject } from '~/api/api-types';
import { RootState } from '~/services';
import { StatusType } from '~/utils/check-status-card';

export const getAllProject = createAsyncThunk<void>(
  'projectSlice/getAllProject',
  (_, { fulfillWithValue, dispatch }) => {
    return project.getAllProjectsRequest().then((res) => {
      dispatch(setProjectList(res.results));
      return fulfillWithValue(res);
    });
  },
);

// СОЗДАНИЕ ПРОЕКТА
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

// ПОЛУЧЕНИЕ ПРОЕКТА ПО ID
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

// УДАЛЕНИЕ ПРОЕКТА ПО ID
export const deleteUserProjectByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/deleteProjectByID', (id, { rejectWithValue }) =>
  project.deleteProjectByIDRequest(id).catch((err) => rejectWithValue(err.response.data)),
);

// ОБНОВЛЕНИЕ ПРОЕКТА ПО ID
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

// ПОЛУЧЕНИЕ СПИСКА УЧАСТНИКОВ
export const getParticipantsListID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/getParticipantsListID', (id, { rejectWithValue }) =>
  project
    .getParticipantsListIDRequest(id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => rejectWithValue(err.response.data)),
);
// ПОЛУЧЕНИЕ СПИСКА ВАКАНСИЙ
export const getVacanciesID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/getVacanciesID', (id, { rejectWithValue }) =>
  project
    .getVacanciesIDRequest(id)
    .then((res) => {
      return res;
    })
    .catch((err) => rejectWithValue(err.response.data)),
);
// СОЗДАНИЕ ВАКАНСИИ
export const createVacancy = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('projectSlice/createVacancy', ({ id, data }, { rejectWithValue }) =>
  project.createVacanciesIDRequest({ id, data }).catch((err) => rejectWithValue(err.response.data)),
);

export type Projectlist = {
  id: number;
  name: string;
  status: StatusType;
  intro: string;
};

type InitialState = {
  getAllProjectRequest: boolean | null;
  getAllProjectError: boolean | null;
  createProjectRequest: boolean | null;
  createProjectError: boolean | null;
  getProjectByIDRequest: boolean | null;
  getProjectByIDError: boolean | null;
  deleteProjectByIDRequest: boolean | null;
  deleteProjectByIDError: boolean | null;
  updateProjectByIDRequest: boolean | null;
  updateProjectByIDError: boolean | null;
  getParticipantsListIDRequest: boolean | null;
  getParticipantsListIDError: boolean | null;
  getVacanciesIDRequest: boolean | null;
  getVacanciesIDError: boolean | null;
  createVacancyRequest: boolean | null;
  createVacancyError: boolean | null;
  projectList: Projectlist[];
  project: TProject | null;
};

const initialState: InitialState = {
  getAllProjectRequest: null,
  getAllProjectError: null,

  createProjectRequest: null,
  createProjectError: null,

  getProjectByIDRequest: null,
  getProjectByIDError: null,

  deleteProjectByIDRequest: null,
  deleteProjectByIDError: null,

  updateProjectByIDRequest: null,
  updateProjectByIDError: null,

  getParticipantsListIDRequest: null,
  getParticipantsListIDError: null,

  getVacanciesIDRequest: null,
  getVacanciesIDError: null,

  createVacancyRequest: null,
  createVacancyError: null,

  projectList: [],

  project: null,
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setProjectList: (state, action) => {
      if (state.projectList.length === 0) {
        state.projectList = [...action.payload];
      } else {
        state.projectList = [...state.projectList, ...action.payload];
      }
    },

    setProject: (state, action) => {
      state.project = action.payload;
    },
  },

  extraReducers: (builder) => {
    // ПОЛУЧЕНИЕ ВСЕХ ПРОЕКТОВ
    builder.addCase(getAllProject.pending, (state) => {
      state.getAllProjectRequest = true;
    });
    builder.addCase(getAllProject.fulfilled, (state) => {
      state.getAllProjectRequest = null;
    });
    builder.addCase(getAllProject.rejected, (state) => {
      state.getAllProjectRequest = null;
      state.getAllProjectError = true;
    });
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
    // ПОЛУЧЕНИЕ СПИСКА КОМАНДЫ
    builder.addCase(getParticipantsListID.pending, (state) => {
      state.getParticipantsListIDRequest = true;
    });
    builder.addCase(getParticipantsListID.fulfilled, (state) => {
      state.getParticipantsListIDRequest = null;
    });
    builder.addCase(getParticipantsListID.rejected, (state) => {
      state.getParticipantsListIDRequest = null;
      state.getParticipantsListIDError = true;
    });
    // ПОЛУЧЕНИЕ СПИСКА ВАКАНСИЙ
    builder.addCase(getVacanciesID.pending, (state) => {
      state.getVacanciesIDRequest = true;
    });
    builder.addCase(getVacanciesID.fulfilled, (state) => {
      state.getVacanciesIDRequest = null;
    });
    builder.addCase(getVacanciesID.rejected, (state) => {
      state.getVacanciesIDRequest = null;
      state.getVacanciesIDError = true;
    });
    // СОЗДАНИЕ ВАКАНСИИ
    builder.addCase(createVacancy.pending, (state) => {
      state.createVacancyRequest = true;
    });
    builder.addCase(createVacancy.fulfilled, (state) => {
      state.createVacancyRequest = null;
    });
    builder.addCase(createVacancy.rejected, (state) => {
      state.createVacancyRequest = null;
      state.createVacancyError = true;
    });
  },
});

// Actions
export const { setProject, setProjectList } = projectSlice.actions;
// Selectors
export const getProject = (state: RootState) => state.project.project;
export const getProjectList = (state: RootState) => state.project.projectList;
// Reducers
export default projectSlice.reducer;
