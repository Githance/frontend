import { useSelector, useDispatch } from "react-redux";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import style from "./resend-email-page.module.css";
import { getUserEmail } from "../../services/selectors/selectors";
import { resetUserPassword } from "../../services/slice/user-auth-slice";

function ResendEmailPage() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetUserPassword(userEmail));
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Письмо отправлено</p>
        <p className={style.text}>
          Если вы&nbsp;не&nbsp;получили письмо, проверьте папку
          &laquo;спам&raquo; или попробуйте отправить запрос ещё раз
        </p>
        <Form onSubmit={onSubmit}>
          <Button isValid type="submit" className={style.button}>
            Ещё раз
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ResendEmailPage;
