import { FC } from 'react';
import { Link } from 'react-router-dom';
import CheckBox from '~/components/checkbox/checkbox';
import style from './agreement.module.css';
type Props = {
  register: any;
};

const Agreement: FC<Props> = ({ register }) => {
  return (
    <div className={style.agreement}>
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
