import { useState, FC } from 'react';
import { useDispatch, useSelector } from '~/services/hooks';
import { resendUserEmail, resetUserPassword } from '../../../services/slice/auth/reset-page-slice';
import { getUserEmail } from '../../../services/selectors';
import TimerToSubmit from '../../../components/timer-to-submit/timer-to-submit';
import style from './resend-page.module.css';
import { Link } from 'react-router-dom';

type Props = {
  base: string;
};

const ResendPage: FC<Props> = ({ base }) => {
  const dispatch = useDispatch();
  const [link, setLink] = useState(true);
  const userEmail = useSelector(getUserEmail);

  const handleClick = () => {
    if (base === 'mail') {
      dispatch(resendUserEmail(userEmail));
      setLink(false);
    } else {
      dispatch(resetUserPassword(userEmail)).then(() => setLink(false));
    }
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Письмо отправлено</h2>
        <p className={style.text}>
          Если вы&nbsp;не&nbsp;получили письмо, проверьте папку &laquo;спам&raquo; или попробуйте
          {link ? (
            // eslint-disable-next-line
            <span className={style.link} onClick={handleClick}>
              отправить запрос ещё раз
            </span>
          ) : (
            <TimerToSubmit setLink={() => setLink(true)} />
          )}
        </p>
        <Link className={style.button} to="/">
          К проектам
        </Link>
      </div>
    </div>
  );
};

export default ResendPage;
