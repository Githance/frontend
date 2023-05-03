import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '~/services/hooks';
import style from './main-page.module.css';
import Presentation from '../../components/presentation/presentation';
import CardTable from '../../components/card-table/card-table';
import { getAllProject } from '~/services/slice/project/project-slice';
import { getProjectList } from '~/services/slice/project/project-slice';

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const projectList = useSelector(getProjectList);  

  useEffect(() => {
    dispatch(getAllProject())
      .unwrap()
      .then((res) => console.log(res));
  }, []);

  return (
    <main className={style.content}>
      <Presentation />
      <CardTable projectList={projectList}/>
    </main>
  );
};

export default MainPage;
