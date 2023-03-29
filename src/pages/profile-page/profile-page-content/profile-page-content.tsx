import { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from './profile-page-content.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';

const ProfilePageContent: FC = () => {
  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      telegram: '',
      portfolio_url: '',
      summary_url: '',
      bio: '',
    },
  });

  return (
    <form className={style.form}>
      <PageInput iconSize="medium" inputSize="large" control={control} />
    </form>
  );
};

export default ProfilePageContent;
