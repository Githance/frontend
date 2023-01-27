/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";
import Form from "../../components/form/form";
import FormTitle from "../../components/form-title/form-title";
import InputLabel from "../../components/input-label/input-label";
import TextInput from "../../components/text-input/text-input";
import EmailInput from "../../components/email-input/email-input";
import PasswordInput from "../../components/password-input/password-input";
import InputErrorText from "../../components/input-error-text/input-error-text";
import InputText from "../../components/input-text/input-text";
import Button from "../../components/button/button";
import CheckBox from "../../components/checkbox/checkbox";
import { registrationPageScheme } from "../../utils/validation-scheme";
import style from "./registration-page.module.css";

function RegistrationPage() {
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
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        className={style.form}
      >
        <FormTitle className={style.title}>Регистрация</FormTitle>
        <fieldset className={style.fieldset}>
          <InputLabel htmlFor="user" className={style.label} required>
            Имя пользователя
          </InputLabel>
          <TextInput
            register={register}
            className={style.input}
            htmlFor="user"
          />
          {false && <InputErrorText>Validation text</InputErrorText>}
        </fieldset>
        <fieldset className={cn(style.fieldset, style.container__email)}>
          <InputLabel htmlFor="email" required>
            Электронная почта
          </InputLabel>
          <EmailInput
            register={register}
            className={style.input}
            htmlFor="email"
          />
          {false && <InputErrorText>Validation text</InputErrorText>}
        </fieldset>
        <fieldset className={cn(style.fieldset, style.container__password)}>
          <InputLabel htmlFor="password" required>
            Пароль
          </InputLabel>
          <PasswordInput
            register={register}
            className={style.input}
            htmlFor="password"
          />
          {false ? (
            <InputErrorText>Validation text</InputErrorText>
          ) : (
            <InputText>
              Минимум 8 символов, должен включать цифры и буквы
            </InputText>
          )}
        </fieldset>
        <div className={style.agreement}>
          <CheckBox register={register} />
          <p className={style.agreement__text}>
            Согласен с
            <a className={style.agreement__link} href="#">
              условиями пользования
            </a>
            платформой Githance и&nbsp;условиями обработки персональных данных
            на условиях, определенных
            <a className={style.agreement__link} href="#">
              Политикой конфиденциальности
            </a>
          </p>
        </div>
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
          >
            <span className={style.icon}></span>
            Войти через Google
          </Button>
        </fieldset>
        <div className={style.container__text}>
          <p className={style.text}>Уже зарегистрированы? </p>
          <Link className={style.link} to="/authentication">
            Войти
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationPage;
