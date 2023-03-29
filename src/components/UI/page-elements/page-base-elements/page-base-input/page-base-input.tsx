/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { ChangeEventHandler, forwardRef } from 'react';
import cn from 'classnames';
import style from './page-base-input.module.css';

type Props = {
  name: string;
  onBlur?: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  disabled?: boolean;
  size: 'large' | 'medium' | 'small';
};

type Ref = HTMLInputElement;

const PageBaseInput = forwardRef<Ref, Props>((props, ref) => {
  const { name, onChange, value, onBlur } = props;

  return (
    <input
      type="text"
      ref={ref}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      name={name}
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
});

export default PageBaseInput;
