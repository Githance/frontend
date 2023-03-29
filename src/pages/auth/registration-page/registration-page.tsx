import { useDispatch } from '~/services/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Agreement,
  ButtonFieldset,
  EmailFieldset,
  Form,
  GoogleBtn,
  PasswordFieldset,
  TextFieldset,
  InputMessage,
  Label,
  SubmitBtn,
} from '~/components/UI/index';
import style from './registration-page.module.css';
import { registerUser } from '~/services/slice/auth/register-page-slice';
import { setEmail } from '~/services/actions';
import oauthSignIn from '~/utils/google-request';
import PasswordInput from '../../../components/form-inputs/password-input';
import EmailInput from '../../../components/form-inputs/email-input';

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, control, setError, handleSubmit, formState } = useForm({
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

  const onSubmit = (data: any) => {
    dispatch(setEmail(data.email));
    dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate('/auth/mail/resend-register'))
      .catch((err) => {
        if (err?.name) {
          setError('name', {
            type: 'server',
            message: err['name'],
          });
        } else if (err?.email) {
          setError('email', {
            type: 'server',
            message: err['email'],
          });
        } else if (err?.password1) {
          setError('password1', {
            type: 'server',
            message: err['password1'],
          });
        }
      });
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Регистрация</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <fieldset className={style.fieldset}>
            <Label>Имя пользователя</Label>
            <EmailInput control={control} name="text" />
          </fieldset>
          <fieldset className={style.fieldset}>
            <Label>Электронная почта</Label>
            <EmailInput control={control} name="email" />
          </fieldset>
          <fieldset className={style.fieldset}>
            <Label>Пароль</Label>
            <PasswordInput control={control} name="password" />
          </fieldset>

          <Agreement register={register} className={style.agreement} />
          <SubmitBtn isValid={formState.isValid}>войти</SubmitBtn>
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
}

export default RegistrationPage;
