import { Link } from "react-router-dom";
import style from "./info-mail-page.module.css";

function InfoMailPage() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.title}>Письмо отправлено</p>
        <p className={style.text}>
          Письмо с подтверждением выслано на вашу почту
        </p>
        <Link className={style.button} to="/">
          К проектам
        </Link>
      </div>
    </div>
  );
}

export default InfoMailPage;
