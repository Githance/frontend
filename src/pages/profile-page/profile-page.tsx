import { FC, FormEvent, useCallback } from 'react';
import style from './profile-page.module.css';
import MainInput from '~/components/main-input/main-input';
import MainTextarea from '~/components/main-textarea/main-textarea';
import FieldsetButton from './fieldset-button/fieldset-button';
import FieldsetLinks from './fieldset-links/fieldset-links';

const ProfilePage: FC = () => {
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return (
    <main className={style.profile}>
      <div className={style.profile__name}>
        <MainInput value="text" type="primary" onSubmit={(e: FormEvent) => onSubmit(e)} />
      </div>
      <div className={style.profile__info}>
        <div>
          <p className={style.label}>Контакты</p>
          <MainInput value="text" type="secondary" onSubmit={(e: FormEvent) => onSubmit(e)} />
          <MainInput value="text" type="secondary" onSubmit={(e: FormEvent) => onSubmit(e)} />
        </div>
        <FieldsetLinks />
        <FieldsetButton />
      </div>
      <div className={style.profile__about}>
        <MainTextarea about="Информация" isValid onSubmit={(e: FormEvent) => onSubmit(e)} />
      </div>
    </main>
  );
};

export default ProfilePage;
