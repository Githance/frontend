import React, { FC } from 'react';
import ProfessionCard from '~/components/UI/cards/profession-card/profession-card';
import style from './vacancy-page.module.css';

const VacancyPage: FC = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.cardWrapper}>
        <li>
          <ProfessionCard title="Тестировщик" subtitle=" много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текстамного текста много текста много текста" />
        </li>
        <li>
          <ProfessionCard title="Тестировщик" subtitle="много текста много текста много текста" />
        </li>
        <li>
          <ProfessionCard title="Тестировщик" subtitle="много текста много текста много текста" />
        </li>
      </ul>
    </div>
  );
};

export default VacancyPage;
