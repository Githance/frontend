import { FC } from 'react';
import { Link } from 'react-router-dom';
import { cutText } from '../../../../utils/cutText';
import { RowIcon } from '../../index';
import style from './secondary-card.module.css';
import { checkStatusCard } from '~/utils/check-status-card';
import { StatusType } from '~/api/api-types';

type Props = {
  status: StatusType;
  title: string;
  id: number;
  color: string;
};

const SecondaryCard: FC<Props> = ({ status, title, id, color }) => {
  return (
    <article>
      <Link to={`/project/${id}`} className={style.link} style={{ backgroundColor: `${color}` }}>
        <div className={style.wrapper}>
          <span className={style.status}>{checkStatusCard(status)}</span>
          <RowIcon />
        </div>
        <h2 className={style.title}>{cutText(title, 30)}</h2>
      </Link>
    </article>
  );
};
export default SecondaryCard;
