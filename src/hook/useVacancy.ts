import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from '~/services/hooks';
import { getVacanciesID } from '~/services/slice/project/project-slice';

const useVacancy = (id?: string | null) => {
  const dispatch = useDispatch();
  const [vacancy, setVacancy] = useState('');
  useEffect(() => {
    id &&
      dispatch(getVacanciesID(id))
        .then(unwrapResult)
        .then((res: any) => setVacancy(res))
        .catch((err) => {
          console.log(err);
        });
  }, [dispatch, id]);

  return { vacancy };
};

export default useVacancy;
