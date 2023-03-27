import { useEffect, FC } from 'react';
import { useDispatch } from '~/services/hooks';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Loader from '../../../components/UI/loader/loader';
import style from './google-auth-page.module.css';
import { loginWithGoogle } from '~/services/slice/auth/auth-page-slice';

const GoogleAuthPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchCode] = useSearchParams();

  useEffect(() => {
    const code = searchCode.get('code');
    if (code) {
      dispatch(loginWithGoogle(code)).then(() => navigate('/'));
    }
  }, []);

  return (
    <div className={style.container}>
      <Loader />
    </div>
  );
};

export default GoogleAuthPage;
