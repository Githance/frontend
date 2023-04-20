import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { useForm } from 'react-hook-form';
import style from './project-page.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';
import PageLink from '~/components/UI/page-elements/page-link/page-link';
import Textarea from '~/components/UI/form/textarea/textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn, Tab, Label } from '~/components/UI/index';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
import { getProject } from '~/services/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from '~/services/hooks';
import {
  deleteUserProjectByID,
  getProjectByID,
  setProject,
} from '~/services/slice/project/project-slice';

const tabOptions = [{ name: 'Информация о проекте' }, { name: 'Команда' }, { name: 'Вакансии' }];

const ProjectPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState('Информация о проекте');
  const { id } = useParams();
  const project = useSelector(getProject);

  const { /* setError, */ handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      ...project,
      email1: '',
      telegram1: '',
      link1_url: null,
      link2_url: null,
      link3_url: null,
    },
  });

  useEffect(() => {
    dispatch(getProjectByID(id))
      .unwrap()
      .then((res: any) => {
        dispatch(setProject(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, id]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  // УДАЛЕНИЕ
  const confirmDelete = () => {
    Notiflix.Confirm.show(
      'Удалить проект?',
      'Убедитесь, что вы оповестили всех участников проекта или в проекте нет участников.',
      'Да',
      'Нет',
      function okCb() {
        dispatch(deleteUserProjectByID(id))
          .then(() => {
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
          });
      },
      function cancelCb() {
        alert('😪 ...');
      },
      {
        width: '320px',
        borderRadius: '20px',
        titleColor: 'var(--text-color-black)',
        okButtonBackground: 'var(--bg-color-form)',
        okButtonColor: 'var(--bg-color-button-normal)',
        cancelButtonBackground: 'var(--color-input-false)',
        cssAnimationStyle: 'zoom',
      },
    );
  };
  return (
    <>
      <ul className={style.btns_wrapper}>
        {tabOptions.map((option, index) => (
          <li key={index}>
            <Tab active={tab} name={option.name} onClick={() => setTab(option.name)} />
          </li>
        ))}
      </ul>
      {project && (
        <form className={style.form} onSubmit={onSubmit} noValidate>
          <fieldset className={style.form__name}>
            <PageInput
              inputSize="large"
              control={control}
              name="name"
              maxLength={32}
              value={project.name}
            />
          </fieldset>

          <fieldset className={style.form__info}>
            <h3 className={style.title}>Контакты создателя проекта</h3>
            <Label className={style.label}>Электронная почта</Label>
            <PageInput
              value={project.email}
              classname={style.input}
              inputSize="small"
              control={control}
              name="email"
              divider="bold"
            />
            <Label className={style.label}>Ник в Telegram</Label>
            <PageInput
              value={project.telegram}
              inputSize="small"
              control={control}
              name="telegram"
              divider="bold"
            />

            <h3 className={style.title}>
              Контакты менеджера <span className={style.span}>(если менеджер назначен)</span>
            </h3>
            <Label className={style.label}>Электронная почта</Label>
            <PageInput
              classname={style.input}
              inputSize="small"
              control={control}
              name="email1"
              divider="bold"
            />
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
            <Button type="button" className={style.button} isValid onClick={confirmDelete}>
              Удалить проект <ArrowRightIcon size="small" />
            </Button>
            <Divider weight="bold" />
          </fieldset>

          <fieldset className={style.form__about}>
            <Label className={style.title}>Краткое описание проекта</Label>
            <Textarea
              value={project.intro}
              name="intro"
              control={control}
              className={cn(style.shortTextarea, 'mb-4')}
              maxLength={300}
            />
            <Label className={style.title}>Подробное описание проекта</Label>
            <Textarea
              value={project.description}
              name="description"
              control={control}
              className={style.textarea}
              maxLength={1000}
            />
            <SubmitBtn isValid={formState.isDirty} className={cn(style.submit, 'mt-6')}>
              Сохранить
            </SubmitBtn>
          </fieldset>
        </form>
      )}
    </>
  );
};

export default ProjectPage;
