import { FormEvent, useCallback } from 'react';
import style from './profile-page.module.css';
import MainInput from '../../components/main-input/main-input';
import MainLink from '../../components/main-link/main-link';
import MainTextarea from '~/components/main-textarea/main-textarea';

function ProfilePage() {
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return (
    <div className={style.profile}>
      <MainInput value="text" type="primary" onSubmit={(e: FormEvent) => onSubmit(e)} />
      <MainLink link="link" onSubmit={(e: FormEvent) => onSubmit(e)} type="secondary">
        Портфолио
      </MainLink>
      <MainTextarea about="Информация" isValid onSubmit={(e: FormEvent) => onSubmit(e)} />
    </div>
  );
}

export default ProfilePage;
