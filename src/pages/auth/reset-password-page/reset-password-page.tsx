import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from '~/services/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Label, SubmitBtn } from '~/components/UI/index';
import style from './reset-password-page.module.css';
import { confirmUserPassword } from '~/services/slice/auth/reset-page-slice';
import { resetEmail } from '~/services/actions';
import PasswordInput from '../../../components/form-inputs/password-input';

const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, confirmCode } = useParams();

  const { control, setError, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      new_password2: '',
    },
  });

  const onSubmit = (data: any) => {
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
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Новый пароль</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <fieldset className={style.fieldset}>
            <Label>Пароль</Label>
            <PasswordInput control={control} name="password" />
          </fieldset>
          <SubmitBtn isValid={formState.isValid}>Сохранить</SubmitBtn>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
