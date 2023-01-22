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

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { user: "", email: "", password: "" },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={style.container}>
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <Title className={style.title}>Регистрация</Title>
        <Fieldset
          type="text"
          required
          label="Имя пользователя"
          name="user"
          register={register}
          errors={errors}
          dirtyFields={dirtyFields}
        />
        <Fieldset
          type="email"
          required
          label="Электронная почта"
          name="email"
          className={style.input}
          register={register}
          errors={errors}
          dirtyFields={dirtyFields}
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
          hintText="Минимум 8 символов, должен включать цифры и буквы"
          register={register}
          errors={errors}
          dirtyFields={dirtyFields}
        />
        <div className={style.agreement}>
          <CheckBox register={register} />
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
        <Button
          className={`${style.button} ${
            isValid ? style.button__main : style.button__main_noValid
          }`}
          type="submit"
          isValid={isValid}
        >
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
