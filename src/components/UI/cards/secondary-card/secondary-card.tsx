import { FC } from 'react';
import { Link } from 'react-router-dom';
import { cutText } from '../../../../utils/cutText';
import { RowIcon } from '../../index';
import style from './secondary-card.module.css';

type Props = {
  status: string;
  title: string;
  id: number;
};

const SecondaryCard: FC<Props> = ({ status, title, id }) => {
  const colors = ['#e2e2f6', '#F6D2D1', '#D0E6FF', '#D4D5FF'];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  return (
    <article className={style.container} style={{ backgroundColor: `${randomColor}` }}>
      <div className={style.wrapper}>
        <span className={style.status}>{status}</span>
        <Link to={`/project/${id}`}>
          <RowIcon />
        </Link>
      </div>
      <h2 className={style.title}>{cutText(title, 30)}</h2>
    </article>
  );
};
export default SecondaryCard;
