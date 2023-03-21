import { FC, useCallback, FormEvent } from 'react';
import style from './fieldset-links.module.css';
import MainLink from '~/components/main-link/main-link';
import Divider from '~/components/UI/divider/divider';

const FieldsetLinks: FC = () => {
  const onSubmit = useCallback((e: FormEvent) => e.preventDefault(), []);

  return (
    <div className={style.container}>
      <p className={style.label}>Ссылки</p>
      <div className={style.container__links}>
        <MainLink link="link" onSubmit={(e: FormEvent) => onSubmit(e)} type="secondary">
          Портфолио
        </MainLink>
        <Divider />
        <MainLink link="link" onSubmit={(e: FormEvent) => onSubmit(e)} type="secondary">
          Резюме
        </MainLink>
      </div>
    </div>
  );
};

export default FieldsetLinks;
