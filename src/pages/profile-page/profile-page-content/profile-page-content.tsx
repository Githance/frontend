import { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from './profile-page-content.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';

const ProfilePageContent: FC = () => {
  const { handleSubmit, control } = useForm({
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
      <PageInput iconSize="medium" inputSize="large" control={control} name="name" />
    </form>
  );
};

export default ProfilePageContent;
