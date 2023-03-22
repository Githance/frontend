import { FC } from 'react';
import cn from 'classnames';
import style from './label.module.css';

type Props = {
  children: any;
  htmlFor: string;
  className?: string;
  required?: boolean;
};

const Label: FC<Props> = ({ children, htmlFor, className, required }) => {
  return (
    children && (
      <label htmlFor={htmlFor} className={cn(style.label, className)}>
        {children} {required && <span className={style.tag}>*</span>}
      </label>
    )
  );
};

export default Label;
