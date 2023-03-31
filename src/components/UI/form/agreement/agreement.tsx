import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './agreement.module.css';
import { CheckBox } from '../../index';
type Props = {
  register: any;
  className?: string;
};

const Agreement: FC<Props> = ({ register, className }) => {
  return (
    <div className={cn(style.agreement, className)}>
      <CheckBox register={register} />
      <p className={style.agreement__text}>
        Согласен с
        <Link className={style.agreement__link} to="#">
          условиями пользования
        </Link>
        платформой Githance и&nbsp;условиями обработки персональных данных на условиях, определенных
        <Link className={style.agreement__link} to="#">
          Политикой конфиденциальности
        </Link>
      </p>
    </div>
  );
};

export default Agreement;
