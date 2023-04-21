import { FC, useState, useEffect, useRef, useCallback } from 'react';
import { useController } from 'react-hook-form';
import cn from 'classnames';
import style from './page-input.module.css';
import { PenIcon, Button, Divider } from '~/components/UI/index';
import { InputMessage } from '../UI/index';
type Size = 'large' | 'small';
type Divider = 'bold';

type Props = {
  control: any;
  inputSize: Size;
  name: string;
  minLength?: number;
  maxLength?: number;
  divider?: Divider;
  classname?: string;
  hasErrorMessage?: boolean;
};

const PageInput: FC<Props> = ({
  classname,
  control,
  inputSize,
  name,
  minLength,
  maxLength,
  divider,
  hasErrorMessage = false,
}) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const {
    field: { ref, value, ...rest },
    formState: { errors },
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
    <fieldset
      className={cn(
        classname,
        style.pageInput,
        inputSize === 'large' ? style.pageInput_size_large : undefined,
        /* inputSize === 'medium' ? style.pageInput_size_medium : undefined, */
        inputSize === 'small' ? style.pageInput_size_small : undefined,
      )}
    >
      <div className={style.pageInput__container}>
        <input
          type="text"
          autoComplete="on"
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabledInput}
          defaultValue={value}
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
      <Divider active={!disabledInput} weight={divider} />
      {hasErrorMessage && errors[name]?.message && (
        <InputMessage className={style.error} type="error" message={errors[name]?.message} />
      )}
    </fieldset>
  );
};

export default PageInput;
