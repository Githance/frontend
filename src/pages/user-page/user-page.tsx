import { FC, useEffect, useState } from 'react';
import { useDispatch } from '~/services/hooks';
import { nanoid } from '@reduxjs/toolkit';
import cn from 'classnames';
import style from './user-page.module.css';
import Divider from '~/components/UI/divider/divider';
import {
  getSelectedUserData,
  getSelectedUserProject,
} from '~/services/slice/profile/profile-slice';
import { useParams } from 'react-router-dom';
import { SecondaryCard } from '~/components/UI';

type ProjectType = {
  id: number;
  name: string;
  status: string;
};

const UserPage: FC = () => {
  const { id } = useParams();
  const [currentUserData, setCurrentUserData] = useState<any>();
  const [currentUserProject, setCurrentUserProject] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedUserData(id))
      .unwrap()
      .then((res) => {
        console.log(res);
        setCurrentUserData(res);
      });

    dispatch(getSelectedUserProject(id))
      .unwrap()
      .then((res) => {
        console.log(res);
        setCurrentUserProject(res);
      });
  }, []);

  return (
    currentUserData && (
      <main className={style.userPage}>
        <p className={style.userPage__name}>{currentUserData?.name}</p>
        <div className={cn(style.userPage__container, style.userPage__container_position_info)}>
          <div className={style.userPage__container}>
            <p className={style.title}>Контакты</p>
            <div
              className={cn(style.userPage__container, style.userPage__container_position_contacts)}
            >
              <p className={style.label}>Ник в Telegram</p>
              <div
                className={cn(style.userPage__container, style.userPage__container_position_link)}
              >
                <p className={cn(style.label, style.label_color_black)}>
                  {currentUserData?.telegram}
                </p>
                <Divider weight="bold" />
              </div>
            </div>
          </div>
          <div className={style.userPage__container}>
            <p className={style.title}>Ссылки</p>
            <div
              className={cn(style.userPage__container, style.userPage__container_position_links)}
            >
              <div
                className={cn(style.userPage__container, style.userPage__container_position_link)}
              >
                <a
                  href={currentUserData?.portfolio_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={cn(
                    style.link,
                    currentUserData?.portfolio_url ? style.link_active : undefined,
                  )}
                >
                  Портфолио
                </a>
                <Divider weight="bold" />
              </div>
              <div
                className={cn(style.userPage__container, style.userPage__container_position_link)}
              >
                <a
                  href={currentUserData?.summary_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={cn(
                    style.link,
                    currentUserData?.summary_url ? style.link_active : undefined,
                  )}
                >
                  Резюме
                </a>
                <Divider weight="bold" />
              </div>
            </div>
          </div>
        </div>
        <div className={cn(style.userPage__container, style.userPage__container_position_about)}>
          <p className={style.title}>О себе</p>
          <p className={style.text}>{currentUserData?.bio}</p>
        </div>
        <div className={cn(style.userPage__container, style.userPage__container_position_projects)}>
          <p className={style.title}>Участие в проектах</p>
          <div className={style.userPage__projects}>
            {currentUserProject &&
              currentUserProject.map((item: any) => {
                return (
                  <SecondaryCard
                    status={item.status}
                    title={item.name}
                    id={item.id}
                    key={nanoid()}
                  />
                );
              })}
          </div>
        </div>
      </main>
    )
  );
};

export default UserPage;
