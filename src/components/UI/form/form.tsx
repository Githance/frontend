import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './form.module.css';
type Props = {
  children: ReactNode;
  className: string;
  onSubmit: () => void;
};

const Form: FC<Props> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={cn(style.form, className)} noValidate>
      {children}
    </form>
  );
};

export default Form;
