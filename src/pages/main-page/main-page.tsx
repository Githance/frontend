import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from '~/services/hooks';
import style from './main-page.module.css';
import Presentation from '../../components/presentation/presentation';
import CardTable from '../../components/card-table/card-table';
import { getAllProject } from '~/services/slice/project/project-slice';
import { getProjectList } from '~/services/slice/project/project-slice';
import { useInView } from 'react-intersection-observer';
import { setProjectList } from '~/services/slice/project/project-slice';

const MainPage: FC = () => {
  const [data, setData] = useState<any>();
  const [dividerRef, inViewDivider] = useInView({ threshold: 0 });

  const dispatch = useDispatch();
  const projectList = useSelector(getProjectList);

  useEffect(() => {
    dispatch(getAllProject())
      .unwrap()
      .then((res) => {
        /* console.log(res); */
        setData(res);
      });
  }, []);

  useEffect(() => {
    console.log(inViewDivider);
    if (inViewDivider && data.next) {
      axios
        .get(data.next)
        .then((res) => res.data)
        .then((res) => {
          setData(res);
          console.log(res);
          setProjectList(res.results);
        });
    }
  });

  return (
    <main className={style.content}>
      <Presentation />
      <CardTable projectList={projectList} />
      <div ref={dividerRef}></div>
    </main>
  );
};

export default MainPage;
