import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resendUserEmail } from '../../services/slice/user-auth-slice';
import { resetUserPassword } from '../../services/slice/user-auth-slice';
import { getUserEmail } from '../../services/selectors/selectors';
import TimerToSubmit from '../../components/timer-to-submit/timer-to-submit';
import style from './resend-page.module.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ResendPage = ({ base }) => {
  const dispatch = useDispatch();
  const [link, setLink] = useState(true);
  const userEmail = useSelector(getUserEmail);

  const handleClick = () => {
    if (base === 'mail') {
      dispatch(resendUserEmail(userEmail));
      setLink(false);
    }
    dispatch(resetUserPassword(userEmail)).then(() => setLink(false));
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Письмо отправлено</p>
        <p className={style.text}>
          Если вы&nbsp;не&nbsp;получили письмо, проверьте папку &laquo;спам&raquo; или попробуйте
          {link ? (
            // eslint-disable-next-line
            <span className={style.link} onClick={handleClick}>
              отправить запрос ещё раз
            </span>
          ) : (
            <TimerToSubmit setLink={setLink} />
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
