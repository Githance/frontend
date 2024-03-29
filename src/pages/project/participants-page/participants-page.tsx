import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from '~/services/hooks';
import { getParticipantsListID } from '~/services/slice/project/project-slice';
import style from './participants-page.module.css';

const ParticipantsPage: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getParticipantsListID(id));
  }, [id, dispatch]);
  return <div className={style.test}>В РАЗРАБОТКЕ</div>;
};

export default ParticipantsPage;
