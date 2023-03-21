import { FC, FormEvent, useCallback } from 'react';
import style from './fieldset-info.module.css';
import MainInput from '~/components/main-input/main-input';

const FieldsetInfo: FC = () => {
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return (
    <div className={style.container}>
      <p className={style.title}>Контакты</p>
      <div className={style.container__info}>
        <div className={style.container__input}>
          <p className={style.label}>Электронная почта (видна только вам)</p>
          <p className={style.email}>email</p>
        </div>
        <div className={style.container__input}>
          <p className={style.label}>Ник в Telegram</p>
          <MainInput value="text" type="secondary" onSubmit={(e: FormEvent) => onSubmit(e)} />
        </div>
      </div>
    </div>
  );
};

export default FieldsetInfo;
