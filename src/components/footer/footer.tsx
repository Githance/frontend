import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <Link to="/" className={style.link}>
          Пользовательское соглашение
        </Link>
        <Link to="/" className={style.link}>
          support@githance.com
        </Link>
        <Link to="/" className={style.link}>
          Политика конфиденциальности
        </Link>

        <p className={style.author}>© 2023, Githance </p>
      </div>
    </footer>
  );
};

export default Footer;
