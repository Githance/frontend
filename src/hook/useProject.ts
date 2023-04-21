import { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from '~/services/hooks';
import { handleErrors } from '~/utils/handleErrors';
import {
  createProject,
  deleteUserProjectByID,
  getProjectByID,
  setProject,
  updateUserProjectByID,
} from '~/services/slice/project/project-slice';

const useProject = (id: any, setError: any, { deletePath }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    id &&
      dispatch(getProjectByID(id))
        .then(unwrapResult)
        .catch((err: any) => {
          console.log(err);
        });
  }, [dispatch, id]);

  const onSubmit = (data: any) => {
    id
      ? dispatch(updateUserProjectByID({ id, data }))
          .then(unwrapResult)

          .catch((err: any) => {
            handleErrors(err, setError);
          })
      : dispatch(createProject(data))
          .then(unwrapResult)
          .then((res: any) => {
            navigate(`/project/${res.id}`);
          })
          .catch((err) => {
            handleErrors(err, setError);
          });
  };

  const handleDeleteProject = () => {
    dispatch(deleteUserProjectByID(id))
      .then(() => navigate(deletePath))
      .catch((err: any) => console.log(err));
  };

  return { onSubmit, handleDeleteProject };
};

export default useProject;
