import { NavLink } from "react-router-dom";
import Form from "../form/form";
import Fieldset from "../fieldset/fieldset";
import style from "./authentication-page.module.css";

function AuthenticationPage() {
  return (
    <div className={style.container}>
      <Form>
        <Fieldset
          type="text"
          required="required"
          label="Электронная почта"
          name="email"
        />
        <div className={style.container__text}>
          <p className={style.text}>
            Нет аккаунта?
            <NavLink to="/registration" className={style.link}>
              Зарегистрироваться
            </NavLink>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default AuthenticationPage;
