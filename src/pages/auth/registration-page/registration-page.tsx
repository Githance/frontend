import { useDispatch } from '~/services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Agreement, Form, GoogleBtn, Label, SubmitBtn } from '~/components/UI/index';
import style from './registration-page.module.css';
import { registerUser } from '~/services/slice/auth/register-page-slice';
import { setEmail } from '~/services/actions';
import oauthSignIn from '~/utils/google-request';
import PasswordInput from '../../../components/form-inputs/password-input';
import CommonInput from '../../../components/form-inputs/common-input';
import cn from 'classnames';
import { FC, useEffect } from 'react';
import { PassValidationScheme } from '~/utils/validation-scheme';
import { handleErrors } from '~/utils/handleErrors';

const RegistrationPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, control, setError, handleSubmit, formState, setFocus } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password1: '',
    },
  });

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(setEmail(data.email));
    dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate('/auth/mail/resend-register'))
      .catch((err) => {
        handleErrors(err, setError);
      });
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Регистрация</h2>
        <Form onSubmit={onSubmit} className={style.form}>
          <fieldset className={style.fieldset}>
            <Label required={true} htmlFor="name">
              Имя пользователя
            </Label>
            <CommonInput control={control} name="name" placeholder="Name" />
          </fieldset>
          <fieldset className={style.fieldset}>
            <Label required={true} htmlFor="email">
              Электронная почта
            </Label>
            <CommonInput control={control} name="email" />
          </fieldset>
          <fieldset className={style.fieldset}>
            <Label required={true} htmlFor="password1">
              Пароль
            </Label>
            <PasswordInput control={control} name="password1" validation={PassValidationScheme} />
          </fieldset>
          <Agreement register={register} className={style.agreement} />
          <SubmitBtn isValid={formState.isValid}>Зарегистрироваться</SubmitBtn>
        </Form>
        <p className={cn(style.text, style.or)}>или</p>
        <GoogleBtn onClick={handleGoogleSubmit} />
        <p className={style.text}>
          Уже зарегистрированы?
          <Link className={style.link} to="/auth">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
