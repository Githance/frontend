import { FC, useState } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { useDispatch } from '~/services/hooks';
import { useNavigate } from 'react-router-dom';
import style from './profile-page-content.module.css';
import PageInput from '~/components/page-input/page-input';
import PageLink from '~/components/page-link/page-link';
import Textarea from '~/components/UI/form/textarea/textarea';
import { Divider, Button, ArrowRightIcon, SubmitBtn } from '~/components/UI/index';
import { CurrentUserResponce } from '~/api/api-types';
import token from '~/utils/token';
import { patchCurrentUserData } from '~/services/slice/profile/profile-slice';
import { logoutUser } from '~/services/slice/auth/auth-page-slice';
import { PATH } from '~/utils/variables';

type Props = { currenProfileData: CurrentUserResponce };

const ProfilePageContent: FC<Props> = ({ currenProfileData }) => {
  const [currentUserData, setCurrentUserData] = useState<any>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
    values: {
      name: currentUserData?.name,
      telegram: currentUserData?.telegram,
      portfolio_url: currentUserData?.portfolio_url,
      summary_url: currentUserData?.summary_url,
      bio: currentUserData?.bio,
    },
    defaultValues: {
      name: currenProfileData?.name || '',
      telegram: currenProfileData?.telegram || '',
      portfolio_url: currenProfileData?.portfolio_url || '',
      summary_url: currenProfileData?.summary_url || '',
      bio: currenProfileData?.bio || '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const userData = {
      data: data,
      token: `Bearer ${token.getToken('accessToken')}`,
    };
    dispatch(patchCurrentUserData(userData))
      .unwrap()
      .then((res) => setCurrentUserData(res));
  });

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate(PATH.HOME);
      });
  };

  return (
    <form className={style.form} onSubmit={onSubmit} noValidate>
      <div className={style.form__name}>
        <PageInput inputSize="large" control={control} name="name" maxLength={38} />
      </div>
      <div className={style.form__info}>
        <div className={style.container}>
          <p className={style.title}>Контакты</p>
          <div className={cn(style.container, style.container__item)}>
            <div className={cn(style.container, style.container__inputs)}>
              <p className={style.label}>Электронная почта (видна только вам)</p>
              <p className={style.email}>{currenProfileData.email}</p>
              <Divider weight="bold" />
            </div>
            <div className={cn(style.container, style.container__inputs)}>
              <p className={style.label}>Ник в Telegram</p>
              <PageInput
                inputSize="small"
                control={control}
                name="telegram"
                divider="bold"
                maxLength={32}
                minLength={5}
              />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <p className={style.title}>Ссылки</p>
          <div className={cn(style.container, style.container__item)}>
            <PageLink
              inputSize="small"
              control={control}
              name="portfolio_url"
              linkName="Портфолио"
              divider="bold"
            />
            <PageLink
              inputSize="small"
              control={control}
              name="summary_url"
              linkName="Резюме"
              divider="bold"
            />
          </div>
        </div>
        <div className={style.container}>
          <p className={style.title}>Управление</p>
          <div className={cn(style.container, style.container__item)}>
            <Button type="button" className={style.button} isValid>
              Изменить пароль <ArrowRightIcon size="small" />
            </Button>
            <Divider weight="bold" />
            <Button type="button" className={style.button} isValid onClick={handleLogout}>
              Выйти из профиля <ArrowRightIcon size="small" />
            </Button>
          </div>
        </div>
      </div>
      <div className={style.form__about}>
        <p className={style.title}>О&nbsp;себе (максимум 1000&nbsp;символов)</p>
        <Textarea name="bio" control={control} className={style.textarea} maxLength={1000} />
        <SubmitBtn isValid={isDirty} className={style.submit}>
          Сохранить
        </SubmitBtn>
      </div>
    </form>
  );
};

export default ProfilePageContent;
