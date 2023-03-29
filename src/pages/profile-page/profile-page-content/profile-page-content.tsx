import { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from './profile-page-content.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';
import Divider from '~/components/UI/divider/divider';

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
      <div className={style.form__name}>
        <PageInput iconSize="medium" inputSize="large" control={control} name="name" />
        <Divider />
      </div>
    </form>
  );
};

export default ProfilePageContent;
