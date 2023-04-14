import { FC, useState, useEffect, useRef } from 'react';
import { useController } from 'react-hook-form';
import cn from 'classnames';
import style from './page-input.module.css';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';
import { PenIcon, Button, CheckIcon } from '~/components/UI/index';

type Size = 'large' | 'medium' | 'small';

type Props = {
  control?: any;
  inputSize: Size;
  name: string;
  minLength?: number;
  maxLength?: number;
};

const PageInput: FC<Props> = ({ control, inputSize, name, minLength, maxLength }) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  const {
    field: { ref, ...rest },
  } = useController({
    control,
    name,
  });

  useEffect(() => {
    if (!disabledInput) {
      firstNameRef.current?.focus();
    }
  }, [disabledInput]);

  const setDisable = () => {
    setDisabledInput((prevValue) => !prevValue);
  };

  return (
    <fieldset className={cn(style.pageInput)}>
      <input
        type="text"
        autoComplete="on"
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabledInput}
        {...rest}
        ref={(e) => {
          ref(e);
          firstNameRef.current = e;
        }}
        className={cn(
          style.input,
          inputSize === 'large' ? style.input_size_large : undefined,
          inputSize === 'medium' ? style.input_size_medium : undefined,
          inputSize === 'small' ? style.input_size_small : undefined,
        )}
      />

      <Button type="button" onClick={setDisable} className={style.button} isValid>
        <PenIcon size={inputSize} />
      </Button>
    </fieldset>
  );
};

export default PageInput;
