import { FC, useEffect } from 'react';
import { useDispatch } from '~/services/hooks';
import style from './main-page.module.css';
import Presentation from '../../components/presentation/presentation';
import CardTable from '../../components/card-table/card-table';
import { getAllProject } from '~/services/slice/project/project-slice';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProject())
      .unwrap()
      .then((res) => console.log(res));
  }, []);

  return (
    <main className={style.content}>
      <Presentation />
      <CardTable />
    </main>
  );
};

export default MainPage;
