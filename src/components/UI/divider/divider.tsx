import { FC } from 'react';
import cn from 'classnames';
import style from './divider.module.css';

type Props = {
  weight?: 'regular' | 'bold';
  active?: boolean;
};

const Divider: FC<Props> = ({ weight = 'regular', active = false }) => {
  return (
    <div
      className={cn(
        style.divider,
        weight === 'bold' ? style.divider_weight_bold : undefined,
        active ? style.divider_active : undefined,
      )}
    ></div>
  );
};

export default Divider;
