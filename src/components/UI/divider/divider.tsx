import { FC } from 'react';
import cn from 'classnames';
import style from './divider.module.css';

type Props = {
  weight?: 'regular' | 'bold';
};

const Divider: FC<Props> = ({ weight = 'regular' }) => {
  return (
    <div
      className={cn(style.divider, weight === 'bold' ? style.divider_weight_bold : undefined)}
    ></div>
  );
};

export default Divider;
