import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import style from './project-page.module.css';
import PageInput from '~/components/page-input/page-input';
import Textarea from '~/components/UI/form/textarea/textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn, Label } from '~/components/UI/index';
import { useSelector } from 'react-redux';
import { getProject } from '~/services/selectors';
import { Link, useParams } from 'react-router-dom';
import useModal from '~/hook/useModal';
import Modal from '~/components/UI/modal/modal';
import ConfirmDelete from '~/components/modal/confirm-delete/confirm-delete';
import useProject from '~/hook/useProject';
import {
  textareaValidation1000Scheme,
  textareaValidation300Scheme,
} from '~/utils/validation-scheme';
import { PATH } from '~/utils/variables';

const ProjectPage: FC = () => {
  const { id } = useParams();
  const [isOpen, openModal, closeModal] = useModal(false);

  const project = useSelector(getProject);

  const { setError, handleSubmit, control, formState } = useForm({
    mode: 'onChange',
    defaultValues: { description: '', intro: '' },
    values: {
      ...project,
    },
  });
  const { onSubmit, handleDeleteProject } = useProject(setError, { deletePath: '/' }, id);

  return (
    <>
      {project?.id && (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <fieldset className={style.form__name}>
            <PageInput
              hasErrorMessage={true}
              inputSize="large"
              control={control}
              name="name"
              maxLength={32}
              value={project.name}
            />
          </fieldset>

          <fieldset className={style.form__info}>
            <h3 className={style.title}>Контакты</h3>
            <h4 className={style.label}>Владелец</h4>
            <Link to={`/${PATH.USER}/${project.owner.id}`} className={style.owner}>
              {project?.owner.name}
            </Link>
            <Label className={style.label}>Электронная почта</Label>
            <PageInput
              hasErrorMessage={true}
              value={project.email}
              classname={style.input}
              inputSize="small"
              control={control}
              name="email"
              divider="bold"
            />
            <Label className={style.label}>Ник в Telegram</Label>
            <PageInput
              hasErrorMessage={true}
              value={project.telegram}
              inputSize="small"
              control={control}
              name="telegram"
              divider="bold"
            />
            <p className={style.note}>
              Ваши контакты будут видны специалистам, откликнувшимся на&nbsp;&laquo;вакансию&raquo;.
              Это нужно для того, чтобы специалист смог уточнить у&nbsp;вас недостающую информацию
              по&nbsp;проекту.
            </p>
            <h3 className={style.title}>Управление</h3>
            <Button type="button" className={style.button} isValid onClick={openModal}>
              Удалить проект <ArrowRightIcon size="small" />
            </Button>
            <Divider weight="bold" />
          </fieldset>
          {isOpen && (
            <Modal onClose={closeModal} closeIcon={false}>
              <ConfirmDelete onConfirm={handleDeleteProject} onCancel={closeModal} />
            </Modal>
          )}

          <fieldset className={style.form__about}>
            <Label className={style.title}>Краткое описание проекта</Label>
            <Textarea
              name="intro"
              control={control}
              className={cn(style.shortTextarea)}
              hasErrorMessage={true}
              validation={textareaValidation300Scheme}
            />
            <Label className={style.title}>Подробное описание проекта</Label>
            <Textarea
              name="description"
              control={control}
              className={style.textarea}
              hasErrorMessage={true}
              validation={textareaValidation1000Scheme}
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
