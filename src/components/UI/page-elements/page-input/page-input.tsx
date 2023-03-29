import { FC, useCallback, useState, useEffect, useRef } from 'react';
import { useController, RegisterOptions } from 'react-hook-form';
import cn from 'classnames';
import style from './page-input.module.css';
import Button from '../../button/button';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';
import PenIcon from '../../icons/pen-icon';
import CheckIcon from '../../icons/check-icon';

type Size = 'large' | 'medium' | 'small';

type Props = {
  control?: any;
  inputSize: Size;
  iconSize: Size;
  name: string;
  rules?: RegisterOptions;
};

const PageInput: FC<Props> = ({ control, inputSize, iconSize, name, rules }) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    field: { name: filedName, onBlur, onChange, ref, value },
    formState: { isSubmitSuccessful },
  } = useController({
    control,
    name,
    rules: rules,
  });

  /* ref(inputRef); */

  const disableInput = useCallback(() => {
    console.log('changeInput');
    setDisabledInput((prevValue) => !prevValue);
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      disableInput();
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (!disabledInput && inputRef && inputRef.current) {
      console.log('focusInput');
      inputRef.current.focus();
    }
  }, [disabledInput]);

  const handleOnBlur = useCallback(() => {
    console.log('onBlurInput');
    onBlur();
    disableInput();
  }, []);

  return (
    <fieldset className={cn(style.pageInput)}>
      <PageBaseInput
        ref={inputRef}
        size={inputSize}
        name={filedName}
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
        disabled={disabledInput}
      />
      {disabledInput ? (
        <Button type="button" onClick={disableInput} className={style.button} isValid>
          <PenIcon size={iconSize} />
        </Button>
      ) : (
        <Button type="button" className={style.button} isValid>
          <CheckIcon size={iconSize} active={isSubmitSuccessful} />
        </Button>
      )}
    </fieldset>
  );
};

export default PageInput;
