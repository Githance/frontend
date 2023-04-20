import { useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from '~/services/hooks';
import { handleErrors } from '~/utils/handleErrors';
import {
  deleteUserProjectByID,
  getProjectByID,
  setProject,
  updateUserProjectByID,
} from '~/services/slice/project/project-slice';

interface Props {
  id: string;
  data: any;
  setError: any;
}

const useProject = (id: any, setError: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    id &&
      dispatch(getProjectByID(id))
        .then(unwrapResult)
        .then((res: any) => {
          dispatch(setProject(res));
        })
        .catch((err: any) => {
          console.log(err);
        });
  }, [dispatch, id]);

  const onSubmit = (data: any) => {
    dispatch(updateUserProjectByID({ id, data }))
      .then(unwrapResult)
      .then((res: any) => {
        dispatch(setProject(res));
      })
      .catch((err: any) => {
        handleErrors(err, setError);
      });
  };

  const handleDeleteProject = () => {
    dispatch(deleteUserProjectByID(id))
      .then(() => navigate('/'))
      .catch((err: any) => console.log(err));
  };

  return { onSubmit, handleDeleteProject };
};

export default useProject;
