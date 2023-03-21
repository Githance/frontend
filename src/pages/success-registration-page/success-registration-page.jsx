import { Link } from 'react-router-dom';
import style from './success-registration-page.module.css';

function SuccessRegistrationPage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>вы зарегистрированы</p>
        <p className={style.text}>
          Теперь вы&nbsp;можете создавать проекты и&nbsp;присоединяться к&nbsp;существующим
        </p>
        <Link className={style.button} to="/">
          К проектам
        </Link>
      </div>
    </div>
  );
}

export default SuccessRegistrationPage;
