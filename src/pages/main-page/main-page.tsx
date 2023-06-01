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
    if (!projectList.length) {
      dispatch(getAllProject())
        .unwrap()
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  useEffect(() => {
    if (inViewDivider && data?.next) {
      axios
        .get(`${data?.next}&page_size=3`)
        .then((res) => res.data)
        .then((res) => {
          setData(res);
          dispatch(setProjectList(res.results));
        });
    }
  }, [inViewDivider]);

  return (
    <main className={style.content}>
      <Presentation />
      <CardTable projectList={projectList} />
      <div ref={dividerRef} className="pb-8"></div>
    </main>
  );
};

export default MainPage;
