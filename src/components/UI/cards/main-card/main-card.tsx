import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RowIcon } from '../../index';
import style from './main-card.module.css';
import { checkStatusCard } from '~/utils/check-status-card';
import { StatusType } from '~/api/api-types';

type Props = {
  status: StatusType;
  title: string;
  subtitle: string;
  percent: string;
  id: number;
  color: string;
};

const MainCard: FC<Props> = ({ status, title, subtitle, percent, id, color }) => {
  return (
    <article>
      <Link
        to={`/project/${id}`}
        className={style.container}
        style={{ backgroundColor: `${color}` }}
      >
        <div className={style.wrapper}>
          <span className={style.status}>{checkStatusCard(status)}</span>

          <RowIcon />
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.subtitle}>{subtitle}</p>
        <progress className={style.progress} id="project" max="100" value={percent}></progress>
      </Link>
    </article>
  );
};
export default MainCard;
