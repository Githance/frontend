import { FC } from 'react';
import cn from 'classnames';
import style from './page-base-input.module.css';

type Props = {
  control: any;
  disabled?: boolean;
  size: 'large' | 'medium' | 'small';
};

const PageBaseInput: FC<Props> = ({ ...props }) => {
  return (
    <input
      type="text"
      {...props.control}
      disabled={props.disabled}
      autoComplete="on"
      className={cn(
        style.input,
        props.size === 'large' ? style.input_size_large : undefined,
        props.size === 'medium' ? style.input_size_medium : undefined,
        props.size === 'small' ? style.input_size_small : undefined,
      )}
    />
  );
};

export default PageBaseInput;
