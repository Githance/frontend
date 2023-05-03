/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '~/services/hooks';
import cn from 'classnames';
import style from './user-page.module.css';
import Divider from '~/components/UI/divider/divider';
import { getSelectedUserData } from '~/services/slice/profile/profile-slice';
import { useParams } from 'react-router-dom';

const UserPage: FC = () => {
  const { id } = useParams();
  const [currentUserData, setCurrentUserData] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedUserData(id))
      .unwrap()
      .then((res) => {
        console.log(res);

        setCurrentUserData(res);
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
        </div>
      </main>
    )
  );
};

export default UserPage;
