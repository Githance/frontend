import { FC, useState, useEffect } from 'react';
import { useController, RegisterOptions } from 'react-hook-form';
import cn from 'classnames';
import style from './page-input.module.css';
import Button from '../../button/button';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';
import PenIcon from '../../icons/pen-icon';
import CheckIcon from '../../icons/check-icon';

type Size = 'large' | 'medium' | 'small';

type Props = {
  setFocus?: any;
  control?: any;
  inputSize: Size;
  iconSize: Size;
  name: string;
  rules?: RegisterOptions;
};

const PageInput: FC<Props> = ({ control, inputSize, iconSize, name, rules, setFocus }) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const {
    field,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useController({
    control,
    name,
    rules: rules,
  });

  const checkButtonActivity = async () => {
    if (isSubmitting) {
      await setTimeout(() => {
        setIsActive(true);
      }, 2000);
    }

    if (isSubmitSuccessful) {
      await setTimeout(() => {
        setIsActive(false);
        setDisabledInput(true);
      }, 3000);
    }
  };

  useEffect(() => {
    if (!disabledInput) {
      setFocus && setFocus(name);
    }
  }, [disabledInput]);

  useEffect(() => {
    checkButtonActivity();
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <fieldset className={cn(style.pageInput)}>
      <PageBaseInput size={inputSize} field={field} disabled={disabledInput} />
      {disabledInput ? (
        <Button
          type="button"
          onClick={() => setDisabledInput(false)}
          className={style.button}
          isValid
        >
          <PenIcon size={iconSize} />
        </Button>
      ) : (
        <button type="submit" className={style.button}>
          <CheckIcon size={iconSize} active={isActive} />
        </button>
      )}
    </fieldset>
  );
};

export default PageInput;
