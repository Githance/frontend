import style from "./forgot-password-page.module.css";

function ForgotPasswordPage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Забыли пароль?</p>
        <p className={style.text}>
          Пожалуйста, введите адрес электронной почты, на&nbsp;который
          мы&nbsp;отправим вам инструкцию для восстановления пароля
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
