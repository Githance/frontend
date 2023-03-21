import { FormEvent, useCallback } from 'react';
import style from './profile-page.module.css';
import MainInput from '../../components/main-input/main-input';
import MainLink from '../../components/main-link/main-link';
import MainTextarea from '~/components/main-textarea/main-textarea';

function ProfilePage() {
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
        <div>
          <p className={style.label}>Ссылки</p>
          <MainLink link="link" onSubmit={(e: FormEvent) => onSubmit(e)} type="secondary">
            Портфолио
          </MainLink>
          <MainLink link="link" onSubmit={(e: FormEvent) => onSubmit(e)} type="secondary">
            Резюме
          </MainLink>
        </div>
        <div>
          <p className={style.label}>Управление</p>
        </div>
      </div>
      <div className={style.profile__about}>
        <MainTextarea about="Информация" isValid onSubmit={(e: FormEvent) => onSubmit(e)} />
      </div>
    </main>
  );
}

export default ProfilePage;
