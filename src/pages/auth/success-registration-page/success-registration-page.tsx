import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './success-registration-page.module.css';

const SuccessRegistrationPage: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>вы зарегистрированы</h2>
        <p className={style.text}>
          Теперь вы&nbsp;можете создавать проекты и&nbsp;присоединяться к&nbsp;существующим
        </p>
        <Link className={style.button} to="/">
          К проектам
        </Link>
      </div>
    </div>
  );
};

export default SuccessRegistrationPage;
