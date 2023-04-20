import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { useController } from 'react-hook-form';
import cn from 'classnames';
import style from './page-input.module.css';
import { PenIcon, Button, Divider } from '~/components/UI/index';

type Size = 'large' | /* 'medium' | */ 'small';
type Divider = 'bold';

type Props = {
  classname?: string;
  control: any;
  inputSize: Size;
  name: string;
  minLength?: number;
  maxLength?: number;
  divider?: Divider;
  value?: any;
};

const PageInput: FC<Props> = ({
  classname,
  control,
  inputSize,
  name,
  minLength,
  maxLength,
  divider,
  /* value, */
}) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const {
    field: { ref, value, ...rest },
  } = useController({
    control,
    name,
  });

  useEffect(() => {
    if (!disabledInput) {
      firstNameRef.current?.focus();
    }
  }, [disabledInput]);

  const toggleInput = useCallback(() => {
    setDisabledInput((prev) => !prev);
  }, []);

  return (
    <div className={cn(classname, disabledInput ? style.wrapper : style.wrapperActive)}>
      <input
        type="text"
        autoComplete="on"
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabledInput}
        value={value || ''}
        {...rest}
        ref={(e) => {
          ref(e);
          firstNameRef.current = e;
        }}
        className={cn(
          style.input,
          inputSize === 'large' ? style.input_size_large : undefined,
          /* inputSize === 'medium' ? style.input_size_medium : undefined, */
          inputSize === 'small' ? style.input_size_small : undefined,
        )}
      />
      <Button type="button" onClick={toggleInput} className={style.button} isValid>
        <PenIcon size={inputSize} active={!disabledInput} />
      </Button>
    </div>
  );
};

export default PageInput;

/*  <div
      className={cn(
        style.pageInput,
        inputSize === 'large' ? style.pageInput_size_large : undefined,
        inputSize === 'small' ? style.pageInput_size_small : undefined,
      )}
    > */

{
  /* <Divider active={!disabledInput} weight={divider} /> */
}
/* </div> */
