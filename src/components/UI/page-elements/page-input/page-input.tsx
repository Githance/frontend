import { FC, useState, useEffect } from 'react';
import { useController } from 'react-hook-form';
import cn from 'classnames';
import style from './page-input.module.css';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';
import { PenIcon, Button, CheckIcon } from '~/components/UI/index';

type Size = 'large' | 'medium' | 'small';

type Props = {
  control?: any;
  inputSize: Size;
  iconSize: Size;
  name: string;
  minLength?: number;
  maxLength?: number;
};

const PageInput: FC<Props> = ({ control, inputSize, iconSize, name, minLength, maxLength }) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const {
    field,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useController({
    control,
    name,
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

  const setDisable = () => {
    setDisabledInput(true);
  };

  useEffect(() => {
    checkButtonActivity();
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <fieldset className={cn(style.pageInput)}>
      <PageBaseInput
        size={inputSize}
        field={field}
        disabled={disabledInput}
        setDisable={setDisable}
        minLength={minLength}
        maxLength={maxLength}
      />
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
