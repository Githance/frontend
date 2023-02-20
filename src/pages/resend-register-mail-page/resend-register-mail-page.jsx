/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./resend-register-mail-page.module.css";
import { getUserEmail } from "../../services/selectors/selectors";
import { resendUserEmail } from "../../services/slice/user-auth-slice";

function ResendRegisterMailPage() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  const onSubmit = () => {    
    dispatch(resendUserEmail(userEmail));
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Письмо отправлено</p>
        <p className={style.text}>
          Если вы&nbsp;не&nbsp;получили письмо, проверьте папку
          &laquo;спам&raquo; или попробуйте
          <span onClick={onSubmit} className={style.link}>
            отправить запрос ещё раз
          </span>
        </p>
        <Link className={style.button} to="/">
          К проектам
        </Link>
      </div>
    </div>
  );
}

export default ResendRegisterMailPage;
