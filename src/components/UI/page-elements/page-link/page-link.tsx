import { FC, useState, useEffect } from 'react';
import { useController } from 'react-hook-form';
import cn from 'classnames';
import style from './page-link.module.css';
import PageBaseInput from '../page-base-elements/page-base-input/page-base-input';
import { AnchorIcon, Button, CheckIcon } from '~/components/UI/index';

type Size = 'large' | 'medium' | 'small';

type Props = {
  control?: any;
  inputSize: Size;
  iconSize: Size;
  name: string;
  linkName: string;
};

const PageLink: FC<Props> = ({ control, inputSize, iconSize, name, linkName }) => {
  const [disabledInput, setDisabledInput] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const {
    field,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useController({
    control,
    name,
  });

  const { value } = field;

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
    <fieldset className={style.pageLink}>
      {disabledInput ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(style.link, !!value && style.link_active)}
        >
          {linkName}
        </a>
      ) : (
        <PageBaseInput
          size={inputSize}
          field={field}
          disabled={disabledInput}
          setDisable={setDisable}
        />
      )}
      {disabledInput ? (
        <Button
          type="button"
          onClick={() => setDisabledInput(false)}
          className={style.button}
          isValid
        >
          <AnchorIcon size={iconSize} />
        </Button>
      ) : (
        <button type="submit" className={style.button}>
          <CheckIcon size={iconSize} active={isActive} />
        </button>
      )}
    </fieldset>
  );
};

export default PageLink;
