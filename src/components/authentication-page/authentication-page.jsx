/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import Form from "../form/form";
import Fieldset from "../fieldset/fieldset";
import Button from "../button/button";
import style from "./authentication-page.module.css";

function AuthenticationPage() {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

  return (
    <div className={style.container}>
      <Form>
        <Fieldset
          type="text"
          required="required"
          label="Электронная почта"
          name="email"
        />
        <Fieldset
          type={showPassword ? "password" : "text"}
          required="required"
          label="Пароль"
          name="password"
          className={style.input}
          togglePassword={() => togglePassword()}
          showPassword={showPassword}
          button
        />
        <Button className={cn(style.button, style.button__main)} type="submit">
          Войти
        </Button>
        <p className={style.text}>или</p>
        <Button
          className={cn(style.button, style.button__google)}
          type="submit"
        >
          <span className={style.icon}></span>
          Войти через Google
        </Button>
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
