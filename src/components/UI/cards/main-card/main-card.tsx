import { FC } from 'react';
import { Link } from 'react-router-dom';
import { cutText } from '../../../../utils/cutText';
import { RowIcon } from '../../index';
import style from './main-card.module.css';

type Props = {
  status: 'В процессе' | 'Завершён' | 'Идет набор';
  title: string;
  subtitle: string;
  percent: string;
  empty?: boolean;
};

const MainCard: FC<Props> = ({ status, title, subtitle, percent, empty }) => {
  const colors = ['#e2e2f6', '#F6D2D1', '#D0E6FF', '#D4D5FF'];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  return (
    <article className={style.container} style={{ backgroundColor: `${randomColor}` }}>
      {empty ? (
        <div className={style.empty_container}></div>
      ) : (
        <>
          <div className={style.wrapper}>
            <span className={style.status}>{status}</span>
            <Link to="/">
              <RowIcon />
            </Link>
          </div>
          <h2 className={style.title}>{cutText(title, 30)}</h2>
          <p className={style.subtitle}>{cutText(subtitle, 142)}</p>
          <progress className={style.progress} id="project" max="100" value={percent}></progress>
          <p className={style.bar_description}>{`${percent}% команды собрано`}</p>
        </>
      )}
    </article>
  );
};
export default MainCard;
