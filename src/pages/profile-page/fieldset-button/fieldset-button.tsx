import { FC } from 'react';
import style from './fieldset-button.module.css';
import { Button } from '~/components/UI';
import ArrowRightIcon from '~/components/UI/icons/arrow-right-icon';
import Divider from '~/components/UI/divider/divider';

const FieldsetButton: FC = () => {
  return (
    <div className={style.container}>
      <p className={style.label}>Управление</p>
      <div className={style.container__buttons}>
        <Button className={style.button} type="button" isValid>
          Изменить пароль
          <ArrowRightIcon size="small" />
        </Button>
        <Divider />
        <Button className={style.button} type="button" isValid>
          Выйти из профиля
          <ArrowRightIcon size="small" />
        </Button>
      </div>
    </div>
  );
};

export default FieldsetButton;
