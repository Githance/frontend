/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable react/self-closing-comp */
import { useDispatch } from 'react-redux';
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
} from '../../../components/UI/index';
import style from './registration-page.module.css';
import { registerUser, setEmail } from '../../../services/slice/user-auth-slice';
import oauthSignIn from '../../../utils/google-request';

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
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
    dispatch(setEmail({ email: data.email }));
    dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate('/auth/mail/resend-register'))
      .catch((err) => {
        for (const key in err) {
          setError(key, {
            type: 'server',
            message: err[key],
          });
        }
      });
  });

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Регистрация</h2>
        <Form onSubmit={onSubmit} className={style.fieldset__container}>
          <TextFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <EmailFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <PasswordFieldset
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
          />
          <Agreement register={register} className={style.agreement} />
          <ButtonFieldset isValid={isValid} />
        </Form>
        <GoogleBtn onClick={handleGoogleSubmit} />
        <p className={style.text}>
          Уже зарегистрированы?{' '}
          <Link className={style.link} to="/auth">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;
