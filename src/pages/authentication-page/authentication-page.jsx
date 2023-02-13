/* eslint-disable no-nested-ternary */
/* eslint-disable react/self-closing-comp */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import Button from "../../components/button/button";
import style from "./authentication-page.module.css";
import oauthSignIn from "../../utils/google-request";
import api from "../../api/api";

function AuthenticationPage() {
  const [searchCode] = useSearchParams();

  useEffect(() => {
    const code = searchCode.get("code");    
    if (code) {
      api
        .googleAuthRequest(code)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({ mode: "onChange", defaultValues: { email: "", password: "" } });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <FormTitle className={style.title}>Вход</FormTitle>
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <fieldset className={style.fieldset}>
            <InputLabel htmlFor="email">Электронная почта</InputLabel>
            <EmailInput
              register={register}
              className={style.input}
              errorClassName={
                !dirtyFields.email
                  ? undefined
                  : errors.email
                  ? style.input_validation_false
                  : style.input_validation_success
              }
              htmlFor="email"
            />
            {errors.email && (
              <InputErrorText>{errors.email.message}</InputErrorText>
            )}
          </fieldset>
          <fieldset className={style.fieldset}>
            <div className={style.container__password}>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Link className={style.link} to="/register">
                Забыли пароль?
              </Link>
            </div>
            <PasswordInput
              register={register}
              className={style.input}
              errorClassName={
                !dirtyFields.password
                  ? undefined
                  : errors.password
                  ? style.input_validation_false
                  : style.input_validation_success
              }
              htmlFor="password"
            />
            {errors.password && (
              <InputErrorText>{errors.password.message}</InputErrorText>
            )}
          </fieldset>
          <fieldset className={cn(style.fieldset, style.container__buttons)}>
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
          </fieldset>
        </Form>
        <Button
          isValid
          className={cn(style.button, style.button__google)}
          type="button"
          onClick={handleGoogleSubmit}
        >
          <span className={style.icon}></span>
          Войти через Google
        </Button>
        <div className={style.container__text}>
          <p className={style.text}>Нет аккаунта?</p>
          <Link className={style.link} to="/register">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
