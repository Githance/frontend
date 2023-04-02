/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';

import style from './profile-page-content.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';
import PageLink from '~/components/UI/page-elements/page-link/page-link';
import PageBaseTextarea from '~/components/UI/page-elements/page-base-elements/page-base-textarea/page-base-textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn } from '~/components/UI/index';

const ProfilePageContent: FC = () => {
  const { handleSubmit, control, reset } = useForm({
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
    <form className={style.form} onSubmit={onSubmit} noValidate>
      <div className={style.form__name}>
        <PageInput
          iconSize="medium"
          inputSize="large"
          control={control}
          name="name"
          maxLength={5}
        />
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
          <div className={cn(style.container, style.container__inputs)}>
            <Button type="button" className={style.button} isValid>
              Изменить пароль <ArrowRightIcon size="small" />
            </Button>
            <Divider />
            <Button type="button" className={style.button} isValid>
              Выйти из профиля <ArrowRightIcon size="small" />
            </Button>
            <Divider />
            <Button type="button" className={style.button} isValid>
              Обновить токен <ArrowRightIcon size="small" />
            </Button>
          </div>
        </div>
      </div>
      <div className={style.form__about}>
        <p className={style.title}>О&nbsp;себе (максимум 1000&nbsp;символов)</p>
        <PageBaseTextarea
          name="bio"
          control={control}
          className={style.textarea}
          maxLength={1000}
        />
        <SubmitBtn className={style.submit}>Сохранить</SubmitBtn>
      </div>
    </form>
  );
};

export default ProfilePageContent;
