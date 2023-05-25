import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { vacancies } from '~/api';
import { RootState } from '~/services';

//! ПОЛУЧАЕМ ВЕС ОПУБЛИКОВАННЫЕ ВАКАНСИИ
export const getAllPublicVacancies = createAsyncThunk<void>(
  'vaсanciesSlice/getAllPublicVacancies',
  (_, { fulfillWithValue, dispatch }) => {
    return vacancies.getAllPublicVacanciesRequest().then((res) => {
      return fulfillWithValue(res);
    });
  },
);

//! ПОЛУЧЕНИЕ ПРОЕКТА ПО ID
export const getVacancyByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('vaсanciesSlice/getVacancyByID', (id, { rejectWithValue, dispatch }) =>
  vacancies.getVacancyByIDRequest(id).catch((err) => rejectWithValue(err.response.data)),
);

//! УДАЛЯЕМ ВАКАНСИЮ ПО ID
export const deleteVacancyByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('vaсanciesSlice/deleteVacancyByID', (id, { rejectWithValue }) =>
  vacancies.deleteVacancyByIDRequest(id).catch((err) => rejectWithValue(err.response.data)),
);

//! ПАТЧИМ ВАКАНСИЮ ПО ID
export const updateVacancyByID = createAsyncThunk<
  void,
  any,
  {
    rejectValue: any;
  }
>('vaсanciesSlice/updateVacancyByID', ({ id, data }, { rejectWithValue, dispatch }) =>
  vacancies
    .updateVacancyByIDRequest({ id, data })
    .catch((err) => rejectWithValue(err.response.data)),
);

type InitialState = {
  getAllPublicVacanciesRequest: boolean | null;
  getAllPublicVacanciesError: boolean | null;

  getVacancyByIDRequest: boolean | null;
  getVacancyByIDError: boolean | null;

  updateVacancyByIDRequest: boolean | null;
  updateVacancyByIDError: boolean | null;

  deleteVacancyByIDRequest: boolean | null;
  deleteVacancyByIDError: boolean | null;
};

const initialState: InitialState = {
  getAllPublicVacanciesRequest: null,
  getAllPublicVacanciesError: null,

  getVacancyByIDRequest: null,
  getVacancyByIDError: null,

  updateVacancyByIDRequest: null,
  updateVacancyByIDError: null,

  deleteVacancyByIDRequest: null,
  deleteVacancyByIDError: null,
};

const vaсanciesSlice = createSlice({
  name: 'vaсanciesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ПОЛУЧАЕМ ВЕС ОПУБЛИКОВАННЫЕ ВАКАНСИИ
    builder.addCase(getAllPublicVacancies.pending, (state) => {
      state.getAllPublicVacanciesRequest = true;
    });
    builder.addCase(getAllPublicVacancies.fulfilled, (state) => {
      state.getAllPublicVacanciesRequest = null;
    });
    builder.addCase(getAllPublicVacancies.rejected, (state) => {
      state.getAllPublicVacanciesRequest = null;
      state.getAllPublicVacanciesError = true;
    });
    // ПОЛУЧАЕМ ВАКАНСИЮ ПО ID
    builder.addCase(getVacancyByID.pending, (state) => {
      state.getVacancyByIDRequest = true;
    });
    builder.addCase(getVacancyByID.fulfilled, (state) => {
      state.getVacancyByIDRequest = null;
    });
    builder.addCase(getVacancyByID.rejected, (state) => {
      state.getVacancyByIDRequest = null;
      state.getVacancyByIDError = true;
    });
    // ПАТЧИМ ВАКАНСИЮ ПО ID
    builder.addCase(updateVacancyByID.pending, (state) => {
      state.updateVacancyByIDRequest = true;
    });
    builder.addCase(updateVacancyByID.fulfilled, (state) => {
      state.updateVacancyByIDRequest = null;
    });
    builder.addCase(updateVacancyByID.rejected, (state) => {
      state.updateVacancyByIDRequest = null;
      state.updateVacancyByIDError = true;
    });
    // УДАЛЯЕМ ВАКАНСИЮ ПО ID
    builder.addCase(deleteVacancyByID.pending, (state) => {
      state.deleteVacancyByIDRequest = true;
    });
    builder.addCase(deleteVacancyByID.fulfilled, (state) => {
      state.deleteVacancyByIDRequest = null;
    });
    builder.addCase(deleteVacancyByID.rejected, (state) => {
      state.deleteVacancyByIDRequest = null;
      state.deleteVacancyByIDError = true;
    });
  },
});

// Actions
/* export const { setProject, setProjectList } = vaсanciesSlice.actions;  */
// Selectors
export const getDeleteVacancyByIDRequest = (state: RootState) =>
  state.vacancies.deleteVacancyByIDRequest;

// Reducers
export default vaсanciesSlice.reducer;
