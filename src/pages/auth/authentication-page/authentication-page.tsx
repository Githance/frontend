import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '~/services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import style from './authentication-page.module.css';
import oauthSignIn from '../../../utils/google-request';
import { loginUser } from '~/services/slice/auth/auth-page-slice';
import { GoogleBtn, Form, InputMessage, Label, SubmitBtn } from '../../../components/UI/index';
import { getLoginErrorText } from '~/services/selectors';
import PasswordInput from '../../../components/form-inputs/password-input';
import CommonInput from '../../../components/form-inputs/common-input';
import cn from 'classnames';

const AuthenticationPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginErrorText = useSelector(getLoginErrorText);
  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const handleGoogleSubmit = () => {
    oauthSignIn();
  };

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(loginUser(data))
      .unwrap()
      .then(() => navigate('/'))
      .catch((err) => {
        if (err?.email) {
          setError('email', {
            type: 'server',
            message: err.email,
          });
        }
      });
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Вход</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <fieldset className={style.fieldset}>
            <Label>Электронная почта</Label>
            <CommonInput control={control} name="email" />
          </fieldset>
          <fieldset className={style.fieldset}>
            <Label>
              Пароль
              <Link className={style.link} to="password/reset">
                Забыли пароль?
              </Link>
            </Label>
            <PasswordInput control={control} name="password" isLogginPage={true} />
          </fieldset>
          {loginErrorText?.non_field_errors && (
            <InputMessage type="error" message={loginErrorText?.non_field_errors[0]} />
          )}
          <SubmitBtn isValid={formState.isValid}>войти</SubmitBtn>
        </Form>
        <p className={cn(style.text, style.or)}>или</p>
        <GoogleBtn onClick={handleGoogleSubmit} />
        <p className={style.text}>
          Нет аккаунта?
          <Link className={style.link} to="registration">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthenticationPage;
