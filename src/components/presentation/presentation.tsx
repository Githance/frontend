import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '~/services/hooks';
import style from './presentation.module.css';
import { getIsAuth } from '~/services/selectors';
import { PATH } from '~/utils/variables';

const Presentation: FC = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Мы — сообщество единомышленников</h1>
        <p className={style.subtitle}>
          Делаем вместе IT-проекты для портфолио и бизнеса. С&nbsp;нами ты можешь создать свой
          проект или&nbsp;присоединиться к существующему.
        </p>
        {!isAuth && (
          <Link to={`${PATH.AUTH}/${PATH.REGISTRATION}`} className={style.button}>
            Присоединиться к сообществу
          </Link>
        )}
        <div className={style.man_image}></div>
        <div className={style.woman_image}></div>
      </div>
    </div>
  );
};

export default Presentation;
