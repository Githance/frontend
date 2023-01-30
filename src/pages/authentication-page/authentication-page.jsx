/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import Button from "../../components/button/button";
import { authenticationPageScheme } from "../../utils/validation-scheme";
import style from "./authentication-page.module.css";
import getGoogleToken from "../../api/user-api";

function AuthenticationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({ mode: "onChange", defaultValues: { email: "", password: "" } });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  function onGoogleSubmit() {
    getGoogleToken().then((res) => console.log(res));
  }

  return (
    <div className={style.container}>
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className={style.form}
      >
        <FormTitle className={style.title}>Вход</FormTitle>
        <fieldset className={style.fieldset}>
          <InputLabel htmlFor="email" required>
            Электронная почта
          </InputLabel>
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
            {...authenticationPageScheme.email}
          />
          {errors.email && (
            <InputErrorText>{errors.email.message}</InputErrorText>
          )}
        </fieldset>
        <fieldset className={style.fieldset}>
          <div className={style.container__password}>
            <InputLabel htmlFor="password" required>
              Пароль
            </InputLabel>
            <Link className={style.link} to="/registration">
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
            {...authenticationPageScheme.password}
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
          <Button
            className={cn(style.button, style.button__google)}
            type="submit"
            onSubmit={() => onGoogleSubmit()}
          >
            <span className={style.icon}></span>
            Войти через Google
          </Button>          
        </fieldset>
        <div className={style.container__text}>
          <p className={style.text}>Нет аккаунта?</p>
          <Link className={style.link} to="/registration">
            Зарегистрироваться
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default AuthenticationPage;
