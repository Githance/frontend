import { FC, useState } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import style from './project-page.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';
import PageLink from '~/components/UI/page-elements/page-link/page-link';
import Textarea from '~/components/UI/form/textarea/textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn, Tab, Label } from '~/components/UI/index';

const tabOptions = [{ name: 'Информация о проекте' }, { name: 'Команда' }, { name: 'Вакансии' }];

const ProjectPage: FC = () => {
  const [tab, setTab] = useState('Информация о проекте');
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: 'Project',
      email: '',
      telegram: '',
      email1: '',
      telegram1: '',
      link1_url: 'url',
      link2_url: 'url',
      link3_url: 'url',
      shArea: '',
      area: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <ul className={style.btns_wrapper}>
        {tabOptions.map((option, index) => (
          <li key={index}>
            <Tab active={tab} name={option.name} onClick={() => setTab(option.name)} />
          </li>
        ))}
      </ul>
      <form className={style.form} onSubmit={onSubmit} noValidate>
        <fieldset className={style.form__name}>
          <PageInput inputSize="large" control={control} name="name" maxLength={5} />
        </fieldset>

        <fieldset className={style.form__info}>

          <h3 className={style.title}>Контакты создателя проекта</h3>
          <Label className={style.label}>Электронная почта</Label>
          <PageInput inputSize="small" control={control} name="email" divider="bold" />
          <Label className={style.label}>Ник в Telegram</Label>
          <PageInput inputSize="small" control={control} name="telegram" divider="bold" />

          <h3 className={style.title}>
            Контакты менеджера <span className={style.span}>(если менеджер назначен)</span>
          </h3>
          <Label className={style.label}>Электронная почта</Label>
          <PageInput inputSize="small" control={control} name="email1" divider="bold" />
          <Label className={style.label}>Ник в Telegram</Label>
          <PageInput inputSize="small" control={control} name="telegram1" divider="bold" />

          <h3 className={style.title}>Ссылки</h3>
          <PageLink
            inputSize="small"
            control={control}
            name="link1_url"
            linkName="Ссылка 1"
            divider="bold"
          />
          <PageLink
            inputSize="small"
            control={control}
            name="link2_url"
            linkName="Ссылка 2"
            divider="bold"
          />
          <PageLink
            inputSize="small"
            control={control}
            name="link3_url"
            linkName="Ссылка 3"
            divider="bold"
          />


          <h3 className={style.title}>Управление</h3>
          <Button type="button" className={style.button} isValid>
            Удалить проект <ArrowRightIcon size="small" />
          </Button>
          <Divider weight="bold" />


        </fieldset>

        <fieldset className={style.form__about}>
          <Label className={style.title}>Краткое описание проекта</Label>
          <Textarea
            name="shArea"
            control={control}
            className={cn(style.shortTextarea, 'mb-4')}
            maxLength={300}
          />
          <Label className={style.title}>Подробное описание проекта</Label>
          <Textarea name="area" control={control} className={style.textarea} maxLength={1000} />
          <SubmitBtn isValid={isDirty} className={style.submit}>
            Сохранить
          </SubmitBtn>
        </fieldset>
      </form>
    </>
  );
};

export default ProjectPage;
