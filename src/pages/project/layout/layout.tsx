import { FC, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Tab } from '~/components/UI';
import style from './layout.module.css';

const ProjectLayout: FC = () => {
  const [tab, setTab] = useState('Информация о проекте');
  const { id } = useParams();
  console.log(id);
  const tabOptions = [
    { name: 'Информация о проекте', to: `${id}` },
    { name: 'Команда', to: '/' },
    { name: 'Вакансии', to: `${id}/vacancy` },
  ];
  return (
    <>
      <ul className={style.btns_wrapper}>
        {tabOptions.map((option, index) => (
          <li key={index}>
            <Link to={option.to}>
              <Tab active={tab} name={option.name} onClick={() => setTab(option.name)} />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default ProjectLayout;
