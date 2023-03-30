import { FC, useRef, useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import cn from 'classnames';
import style from './page-base-input.module.css';

type Props = {
  field: ControllerRenderProps;
  setDisable: () => void;
  disabled?: boolean;
  size: 'large' | 'medium' | 'small';
};

const PageBaseInput: FC<Props> = ({ ...props }) => {
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = props.field;

  useEffect(() => {
    if (!props.disabled) {
      firstNameRef.current?.focus();
    }
  }, [props.disabled]);

  return (
    <input
      type="text"
      {...rest}
      ref={(e) => {
        ref(e);
        firstNameRef.current = e;
      }}
      onBlur={() => props.setDisable()}
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
