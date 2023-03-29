import { FC } from 'react';
import style from './profile-page-content.module.css';
import PageInput from '~/components/UI/page-elements/page-input/page-input';

const ProfilePageContent: FC = () => {
  return (
    <div className={style.content}>
      <PageInput iconSize="medium" inputSize="large" />
    </div>
  );
};

export default ProfilePageContent;
