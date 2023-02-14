/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
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
      <div className={style.content}>
        <FormTitle className={style.title}>Регистрация</FormTitle>
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <fieldset className={style.fieldset}>
            <InputLabel htmlFor="user" className={style.label} required>
              Имя пользователя
            </InputLabel>
            <TextInput
              register={register}
              className={style.input}
              errorClassName={
                !dirtyFields.user
                  ? undefined
                  : errors.user
                  ? style.input_validation_false
                  : style.input_validation_success
              }
              htmlFor="user"
              {...registrationPageScheme.user}
            />
            {errors.user && (
              <InputErrorText>{errors.user.message}</InputErrorText>
            )}
          </fieldset>
          <fieldset className={cn(style.fieldset, style.container__email)}>
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
              {...registrationPageScheme.email}
            />
            {errors.email && (
              <InputErrorText>{errors.email.message}</InputErrorText>
            )}
          </fieldset>
          <fieldset className={cn(style.fieldset, style.container__password)}>
            <InputLabel htmlFor="password" required>
              Пароль
            </InputLabel>
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
              {...registrationPageScheme.password}
            />
            {errors.password ? (
              <InputErrorText>{errors.password.message}</InputErrorText>
            ) : (
              <InputText>
                Минимум 8 символов, должен включать цифры и буквы
              </InputText>
            )}
          </fieldset>
          <div className={style.agreement}>
            <CheckBox register={register}/>
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
          </fieldset>
        </Form>
        <Button
          isValid
          className={cn(style.button, style.button__google)}
          type="button"
        >
          <span className={style.icon}></span>
          Войти через Google
        </Button>
        <div className={style.container__text}>
          <p className={style.text}>Уже зарегистрированы? </p>
          <Link className={style.link} to="/auth">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
