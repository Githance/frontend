import { useForm } from 'react-hook-form';
import { useDispatch } from '~/services/hooks';
import { useNavigate } from 'react-router-dom';
import { Form, Label, SubmitBtn } from '../../../components/UI/index';
import CommonInput from '../../../components/form-inputs/common-input';
import style from './forgot-password-page.module.css';
import { resetUserPassword } from '../../../services/slice/auth/reset-page-slice';
import { setEmail } from '~/services/slice/auth/user-email-slice';
import { FC, useEffect } from 'react';

const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setError, handleSubmit, formState, control, setFocus } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(setEmail(data.email));
    dispatch(resetUserPassword(data.email))
      .unwrap()
      .then(() => navigate('/auth/mail/resend-password'))
      .catch((err) => {
        for (const key in err) {
          setError('email', {
            type: 'server',
            message: err[key],
          });
        }
      });
  });
  useEffect(() => {
    setFocus('email');
  }, [setFocus]);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Забыли пароль?</h2>
        <Form onSubmit={onSubmit} className={style.form}>
          <p className={style.text}>
            Пожалуйста, введите адрес электронной почты, на&nbsp;который мы&nbsp;отправим вам
            инструкцию для восстановления пароля
          </p>
          <fieldset className={style.fieldset}>
            <Label className={style.label} htmlFor="email">
              Электронная почта
            </Label>
            <CommonInput control={control} name="email" />
          </fieldset>
          <SubmitBtn isValid={formState.isValid}>Отправить</SubmitBtn>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
