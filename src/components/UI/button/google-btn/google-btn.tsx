import { FC } from 'react';
import { Button } from '../../index';
import style from './google-btn.module.css';

type Props = { onClick: () => void };

const GoogleBtn: FC<Props> = ({ onClick }) => {
  return (
    <Button isValid className={style.button} onClick={onClick}>
      <span className={style.icon}></span>
      Войти через Google
    </Button>
  );
};

export default GoogleBtn;
