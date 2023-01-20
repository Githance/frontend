/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../form/form";
import Title from "../title/title";
import Fieldset from "../fieldset/fieldset";
import Button from "../button/button";
import CheckBox from "../checkbox/checkbox";
import style from "./registration-page.module.css";

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

  const { register, handleSubmit } = useForm();

  return (
    <div className={style.container}>
      <Form>
        <Title className={style.title}>Регистрация</Title>
        <Fieldset
          type="text"
          required
          label="Имя пользователя"
          name="user"
          register={register}
        />
        <Fieldset
          type="email"
          required
          label="Электронная почта"
          name="email"
          className={style.input}
          register={register}
        />
        <Fieldset
          type={showPassword ? "password" : "text"}
          required
          label="Пароль"
          name="password"
          className={style.input}
          togglePassword={() => togglePassword()}
          showPassword={showPassword}
          button
          hint
          hintText="Минимум 8 символов, должен включать цифры и буквы"
          register={register}
        />
        <div className={style.agreement}>
          <CheckBox />
          <p className={style.agreement__text}>
            Согласен с
            <a className={style.agreement__link} href="#">
              условиями пользования
            </a>
            платформой Githance и&nbsp;условиями обработки персональных данных
            на условиях, определенных
            <a className={style.agreement__link} href="">
              Политикой конфиденциальности
            </a>
          </p>
        </div>
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
            Уже зарегистрированы?
            <NavLink to="/authentication" className={style.link}>
              Войти
            </NavLink>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationPage;
