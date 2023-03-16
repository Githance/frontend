import { useState, useEffect, useCallback, useRef } from "react";
import cn from "classnames";
import style from "./main-link.module.css";
import { AnchorIcon, CheckIcon } from "../UI";

const MainLink = ({ link, children, onChange, onSubmit, type }) => {
  const [disabledInput, setDisabledInput] = useState(true);

  const inputRef = useRef(null);

  const inputType = (type) => {
    return type === "primary" ? true : false;
  };

  const changeInput = useCallback(() => {
    console.log("change");
    setDisabledInput((prevValue) => !prevValue);
  }, [disabledInput]);

  const blurInput = useCallback(() => {
    console.log("blur");
    setDisabledInput((prevValue) => !prevValue);
  }, [disabledInput]);

  useEffect(() => {
    if (!disabledInput) {
      console.log("focus");
      inputRef.current.focus();
    }
  }, [disabledInput]);

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <fieldset
        className={cn(
          style.fieldset,
          inputType(type)
            ? style.fieldset_type_primary
            : style.fieldset_type_secondary
        )}
      >
        {disabledInput ? (
          <a
            href={link}
            className={cn(style.link, !!link && style.link_active)}
          >
            {children}
          </a>
        ) : (
          <input
            type="text"
            value={link}
            className={style.input}
            ref={inputRef}
            onChange={onChange}
            onBlur={blurInput}
          />
        )}
        {disabledInput ? (
          <button type="button" className={style.button} onClick={changeInput}>
            <AnchorIcon size="small" />
          </button>
        ) : (
          <button type="submit" className={style.button}>
            <CheckIcon size="small" />
          </button>
        )}
      </fieldset>
    </form>
  );
};

export default MainLink;
