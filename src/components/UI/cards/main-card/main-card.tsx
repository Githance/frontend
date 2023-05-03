import { FC } from 'react';
import { Link } from 'react-router-dom';
import { cutText } from '../../../../utils/cutText';
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
    <article className={style.container} style={{ backgroundColor: `${randomColor}` }}>
      <div className={style.wrapper}>
        <span className={style.status}>{checkStatusCard(status)}</span>
        <Link to={`/project/${id}`}>
          <RowIcon />
        </Link>
      </div>
      <h2 className={style.title}>{cutText(title, 30)}</h2>
      <p className={style.subtitle}>{cutText(subtitle, 142)}</p>
      <progress className={style.progress} id="project" max="100" value={percent}></progress>
    </article>
  );
};
export default MainCard;
