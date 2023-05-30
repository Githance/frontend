import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './submit-btn.module.css';
import { Button } from '../../index';

type Props = {
  isValid: boolean;
  children: ReactNode;
  className?: string;
};

const SubmitBtn: FC<Props> = ({ isValid, children, className, ...rest }) => {
  return (
    <Button
      className={cn(
        style.button,
        className,
        isValid ? style.button__main : style.button__main_noValid,
      )}
      type="submit"
      isValid={isValid}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
