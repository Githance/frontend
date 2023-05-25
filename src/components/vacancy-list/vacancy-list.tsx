import { FC } from 'react';
import ProfessionCard from '../UI/cards/profession-card/profession-card';
import style from './vacancy-list.module.css';
type Props = {
  results: any;
  openModal: () => void;
};
const VacancyList: FC<Props> = ({ results, openModal }) => {
  return (
    <ul className={style.cardWrapper}>
      {results.reverse().map((el: any, index: number) => {
        return (
          <li key={index}>
            <ProfessionCard
              isPublished={el.is_published}
              id={el.id}
              profession={el.profession}
              description={el.description}
              onClick={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default VacancyList;
