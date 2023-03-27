import { useEffect, FC } from 'react';
import { useDispatch } from '~/services/hooks';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../../../components/UI/loader/loader';
import style from './verify-email-page.module.css';
import { confirmUserEmail } from '~/services/slice/auth/register-page-slice';

const VerifyEmailPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { confirmCode } = useParams();

  useEffect(() => {
    if (confirmCode) {
      dispatch(confirmUserEmail(confirmCode)).then(() => navigate('/'));
    }
  }, []);

  return (
    <div className={style.container}>
      <Loader />
    </div>
  );
};

export default VerifyEmailPage;
