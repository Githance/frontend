import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '~/services/hooks';
import { getCurrentUserRequestState } from '~/services/selectors';
import ProfilePageContent from './profile-page-content/profile-page-content';
import style from './profile-page.module.css';
import { getCurrentUserData } from '~/services/slice/profile/profile-slice';
import Loader from '~/components/UI/loader/loader';
import token from '~/utils/token';
import { CurrentUserResponce } from '~/api/api-types';

const ProfilePage: FC = () => {
  const [currentUserData, setCurrentUserData] = useState<any>();
  const dispatch = useDispatch();
  const currentUserRequestState = useSelector(getCurrentUserRequestState);

  useEffect(() => {
    const accessToken = `Bearer ${token.getToken('accessToken')}`;
    dispatch(getCurrentUserData(accessToken))
      .unwrap()
      .then((res) => setCurrentUserData(res));
  }, []);

  return (
    <main className={style.profilePage}>
      {currentUserRequestState ? (
        <Loader className={style.profilePage__loader} />
      ) : (
        currentUserData && <ProfilePageContent currenProfileData={currentUserData} />
      )}
    </main>
  );
};

export default ProfilePage;
