import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from '~/services/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, PasswordFieldset } from '~/components/UI/index';
import style from './reset-password-page.module.css';
import { confirmUserPassword } from '~/services/slice/auth/reset-page-slice';
import { resetEmail } from '~/services/actions';
import cn from 'classnames';

const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, confirmCode } = useParams();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      new_password2: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    const userData = {
      new_password1: data.new_password2,
      new_password2: data.new_password2,
      uid: id,
      token: confirmCode,
    };
    dispatch(resetEmail());
    dispatch(confirmUserPassword(userData))
      .unwrap()
      .then(() => navigate('/'))
      .catch((err) => {
        for (const key in err) {
          setError('new_password2', {
            type: 'server',
            message: err[key],
          });
        }
      });
  });

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Новый пароль</h2>
        <Form onSubmit={onSubmit}>
          <PasswordFieldset
            validationSchema={{ minLength: { value: 8, message: 'Минимум 8 символов' } }}
            label="Введите новый пароль"
            register={register}
            dirtyFields={dirtyFields}
            errors={errors}
            classNameFalse={style.input_validation_false}
            classNameSuccess={style.input_validation_success}
            htmlFor={'new_password2'}
          />
          <Button
            className={cn(style.button, isValid ? style.button__main : style.button__main_noValid)}
            type="submit"
            isValid={isValid}
          >
            Сохранить
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
