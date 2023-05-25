import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from '~/services/hooks';
import { getCreateVacancyRequest, getVacanciesID } from '~/services/slice/project/project-slice';
import { getDeleteVacancyByIDRequest } from '~/services/slice/project/vacancy-slice';

const useVacancy = (id?: string | null) => {
  const dispatch = useDispatch();
  const [allVacancies, setAllVacancies] = useState<any>({});
  const deleteVacancyRequest = useSelector(getDeleteVacancyByIDRequest);
  const createVacancyRequest = useSelector(getCreateVacancyRequest);
  useEffect(() => {
    id &&
      dispatch(getVacanciesID(id))
        .then(unwrapResult)
        .then((res: any) => setAllVacancies(res))
        .catch((err) => {
          console.log(err);
        });
  }, [dispatch, id, createVacancyRequest, deleteVacancyRequest]);
  const { results = [] } = allVacancies;
  return { allVacancies, results };
};

export default useVacancy;
