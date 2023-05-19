import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RowIcon } from '../../index';
import style from './main-card.module.css';
import { checkStatusCard, StatusType } from '~/utils/check-status-card';

type Props = {
  status: StatusType;
  title: string;
  subtitle: string;
  percent: string;
  id: number;
};

const MainCard: FC<Props> = ({ status, title, subtitle, percent, id }) => {
  const colors = ['#e2e2f6', '#F6D2D1', '#D0E6FF', '#D4D5FF'];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  return (
    <article>
      <Link
        to={`/project/${id}`}
        className={style.container}
        style={{ backgroundColor: `${randomColor}` }}
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
