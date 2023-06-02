import { FC, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from '~/services/hooks';
import style from './main-page.module.css';
import Presentation from '../../components/presentation/presentation';
import CardTable from '../../components/card-table/card-table';
import { getAllProject } from '~/services/slice/project/project-slice';
import { useInView } from 'react-intersection-observer';
import { GetPrimaryProject, PrimaryProject } from '~/api/api-types';

type NextPage = string | null;

const MainPage: FC = () => {
  const [projectList, setProjectList] = useState<PrimaryProject[]>();
  const [next, setNext] = useState<NextPage>();
  const [dividerRef, inViewDivider] = useInView({ threshold: 0 });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!projectList?.length) {
      dispatch(getAllProject())
        .unwrap()
        .then((res) => {
          setNext(res.next);
          setProjectList(res.results);
        });
    }
  }, []);

  useEffect(() => {
    if (inViewDivider && next) {
      axios
        .get(`${next}&page_size=3`)
        .then((res): GetPrimaryProject => res.data)
        .then((res) => {
          setNext(res.next);
          if (projectList) {
            setProjectList([...projectList, ...res.results]);
          }
        });
    }
  }, [inViewDivider]);

  return (
    <main className={style.content}>
      <Presentation />
      <CardTable projectList={projectList} />
      <div ref={dividerRef}></div>
    </main>
  );
};

export default MainPage;
