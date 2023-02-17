import Button from "../../components/button/button";
import style from "./reset-password-mail-page.module.css";

function ResetPasswordMailPage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Письмо отправлено</p>
        <p className={style.text}>
          Если вы&nbsp;не&nbsp;получили письмо, проверьте папку
          &laquo;спам&raquo; или попробуйте отправить запрос ещё раз
        </p>
        <Button className={style.button}>Ещё раз</Button>
      </div>
    </div>
  );
}

export default ResetPasswordMailPage;
