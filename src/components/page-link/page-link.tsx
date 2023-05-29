import { FC, useState, useEffect, useRef } from 'react';
import { useController } from 'react-hook-form';
import cn from 'classnames';
import style from './page-link.module.css';
import { AnchorIcon, Button, Divider } from '~/components/UI/index';

type Size = /* 'large' | 'medium' | */ 'small';
type Divider = 'bold';

type Props = {
  control: any;
  inputSize: Size;
  name: string;
  linkName: string;
  minLength?: number;
  maxLength?: number;
  divider?: Divider;
};

const PageLink: FC<Props> = ({
  control,
  inputSize,
  name,
  linkName,
  maxLength,
  minLength,
  divider,
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

  const setDisable = () => {
    setDisabledInput((prevValue) => !prevValue);
  };

  return (
    <fieldset
      className={cn(
        style.pageLink,
        /* inputSize === 'large' ? style.pageLink_size_large : undefined,
        inputSize === 'medium' ? style.pageLink_size_medium : undefined, */
        inputSize === 'small' ? style.pageLink_size_small : undefined,
      )}
    >
      <div className={style.pageLink__container}>
        {disabledInput ? (
          <a
            href={value || '#'}
            target={value ? '_blank' : undefined}
            rel={value ? 'noopener noreferrer' : undefined}
            className={cn(
              style.link,
              /* inputSize === 'large' ? style.link_size_large : undefined,
              inputSize === 'medium' ? style.link_size_medium : undefined, */
              inputSize === 'small' ? style.link_size_small : undefined,
              !!value && style.link_active,
            )}
          >
            {linkName}
          </a>
        ) : (
          <input
            type="text"
            autoComplete="on"
            minLength={minLength}
            maxLength={maxLength}
            disabled={disabledInput}
            value={value}
            {...rest}
            ref={(e) => {
              ref(e);
              firstNameRef.current = e;
            }}
            className={cn(
              style.input,
              /* inputSize === 'large' ? style.input_size_large : undefined,
              inputSize === 'medium' ? style.input_size_medium : undefined, */
              inputSize === 'small' ? style.input_size_small : undefined,
            )}
          />
        )}
        <Button type="button" onClick={setDisable} className={style.button} isValid>
          <AnchorIcon size={inputSize} active={!disabledInput} />
        </Button>
      </div>

      <Divider active={!disabledInput} weight={divider} />
    </fieldset>
  );
};

export default PageLink;
