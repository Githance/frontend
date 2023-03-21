/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TimerToSubmit from '../../components/timer-to-submit/timer-to-submit';
import style from './resend-password-mail-page.module.css';
import { getUserEmail } from '../../services/selectors/selectors';
import { resetUserPassword } from '../../services/slice/user-auth-slice';

function ResendPasswordMailPage() {
  const dispatch = useDispatch();
  const [link, setLink] = useState(true);
  const userEmail = useSelector(getUserEmail);

  const onSubmit = () => {
    dispatch(resetUserPassword(userEmail)).then(() => setLink(false));
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Письмо отправлено</p>
        <p className={style.text}>
          Если вы&nbsp;не&nbsp;получили письмо, проверьте папку &laquo;спам&raquo; или попробуйте
          {link ? (
            <span onClick={onSubmit} className={style.link}>
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
}

export default ResendPasswordMailPage;
