import { FC } from 'react';
import style from './profile-page.module.css';
import ProfilePageContent from './profile-page-content/profile-page-content';

const ProfilePage: FC = () => {
  return (
    <main className={style.profile}>
      <ProfilePageContent />
    </main>
  );
};

export default ProfilePage;
