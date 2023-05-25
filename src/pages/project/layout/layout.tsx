import { FC, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Tab } from '~/components/UI';
import style from './layout.module.css';

const ProjectLayout: FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>(
    location.pathname.split('/')[3] === `participants`
      ? 'Команда'
      : location.pathname.split('/')[3] === `vacancy`
      ? 'Вакансии'
      : 'Информация о проекте',
  );

  const tabOptions = [
    { name: 'Информация о проекте', to: `${id}` },
    { name: 'Команда', to: `${id}/participants` },
    { name: 'Вакансии', to: `${id}/vacancy` },
  ];

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <>
      <ul className={style.btns_wrapper}>
        {tabOptions.map((option, index) => (
          <li key={index}>
            <Link to={option.to}>
              <Tab
                name={option.name}
                active={activeTab === option.name}
                onClick={() => handleTabClick(option.name)}
              />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default ProjectLayout;
