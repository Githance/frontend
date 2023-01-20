/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../form/form";
import Fieldset from "../fieldset/fieldset";
import Button from "../button/button";
import Title from "../title/title";
import style from "./authentication-page.module.css";

function AuthenticationPage() {
  const [showPassword, setShowPassword] = useState(true);

  function togglePassword() {
    setShowPassword((prevValue) => !prevValue);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={style.container}>
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <Title className={style.title}>Вход</Title>
        <Fieldset
          type="text"
          required
          label="Электронная почта"
          name="email"
          register={register}
          errors={errors}
        />
        <Fieldset
          type={showPassword ? "password" : "text"}
          required
          label="Пароль"
          name="password"
          className={style.input}
          togglePassword={() => togglePassword()}
          showPassword={showPassword}
          linkPage="/registration"
          linkText="Забыли пароль?"
          button
          register={register}
          errors={errors}
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
