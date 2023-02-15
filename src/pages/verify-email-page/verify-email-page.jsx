import Button from "../../components/button/button";
import style from "./verify-email-page.module.css";

/* Отсутствует дизайн */

function VerifyEmailPage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>вы зарегистрированы</p>
        <p className={style.text}>
          Теперь вы&nbsp;можете создавать проекты и&nbsp;присоединяться
          к&nbsp;существующим
        </p>
        <Button isValid className={style.button}>
          К проектам
        </Button>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
