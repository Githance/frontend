import { FC } from 'react';
import cn from 'classnames';
import style from './loader.module.css';

type Props = {
  className?: string;
};

const Loader: FC<Props> = ({ className }) => {
  return <div className={cn(style.loader, className)}></div>;
};

export default Loader;
