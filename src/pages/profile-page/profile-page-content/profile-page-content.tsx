import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import style from './profile-page-content.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';
import PageLink from '~/components/UI/page-elements/page-link/page-link';
import Divider from '~/components/UI/divider/divider';

const ProfilePageContent: FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { touchedFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: 'name',
      telegram: '@telegram',
      portfolio_url: 'portfolio_url',
      summary_url: 'summary_url',
      bio: 'bio',
    },
  });

  // Возможно стоит подумать над использованием touchedFields,
  // для выбора только измененных полей для отправки.
  // touchedFields возвращает объект с именем поля и значением boolean

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.form__name}>
        <PageInput iconSize="medium" inputSize="large" control={control} name="name" />
        <Divider />
      </div>
      <div className={style.form__info}>
        <div className={style.container}>
          <p className={style.title}>Контакты</p>
          <div className={cn(style.container, style.container__item)}>
            <div className={cn(style.container, style.container__inputs)}>
              <p className={style.label}>Электронная почта (видна только вам)</p>
              <p className={style.email}>Email</p>
            </div>
            <Divider />
            <div className={cn(style.container, style.container__inputs)}>
              <p className={style.label}>Ник в Telegram</p>
              <PageInput iconSize="small" inputSize="medium" control={control} name="telegram" />
            </div>
            <Divider />
          </div>
        </div>
        <div className={style.container}>
          <p className={style.title}>Ссылки</p>
          <div className={cn(style.container, style.container__item)}>
            <div className={cn(style.container, style.container__inputs)}>
              <PageLink
                iconSize="small"
                inputSize="medium"
                control={control}
                name="portfolio_url"
                linkName="Портфолио"
              />
              <Divider />
              <PageLink
                iconSize="small"
                inputSize="medium"
                control={control}
                name="summary_url"
                linkName="Резюме"
              />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <p className={style.title}>Управление</p>
        </div>
      </div>
    </form>
  );
};

export default ProfilePageContent;
