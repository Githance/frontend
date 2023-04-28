import { FC } from 'react';
import { useSelector } from '~/services/hooks';
import { getIsAuth } from '~/services/selectors';
import ProfilePageContent from './profile-page-content/profile-page-content';
import style from './profile-page.module.css';
import Loader from '~/components/UI/loader/loader';

const ProfilePage: FC = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <main className={style.profilePage}>
      <ProfilePageContent />
    </main>
  );
};

export default ProfilePage;
