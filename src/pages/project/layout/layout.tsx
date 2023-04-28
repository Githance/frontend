import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Tab } from '~/components/UI';
import style from './layout.module.css';

const tabOptions = [
  { name: 'Информация о проекте', to: '/' },
  { name: 'Команда', to: '/' },
  { name: 'Вакансии', to: '/vacancy' },
];

const ProjectLayout: FC = () => {
  const [tab, setTab] = useState('Информация о проекте');

  return (
    <>
      <ul className={style.btns_wrapper}>
        {tabOptions.map((option, index) => (
          <li key={index}>
            <Tab active={tab} name={option.name} onClick={() => setTab(option.name)} />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default ProjectLayout;
