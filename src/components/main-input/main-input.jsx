import { useState, useRef, useCallback, useEffect } from "react";
import cn from "classnames";
import style from "./main-input.module.css";
import IconPen from "../icon-pen/icon-pen";

function MainInput({ value, onChange, type }) {
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

  const onSubmit = useCallback((e) => e.preventDefault());

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
          inputType
            ? style.fieldset_type_primary
            : style.fieldset_type_secondary
        )}
      >
        <input
          onBlur={blurInput}
          ref={inputRef}
          disabled={disabledInput}
          type="text"
          value={value}
          className={cn(
            style.input,
            inputType ? style.input_type_primary : style.input_type_secondary
          )}
          onChange={onChange}
        />
        {disabledInput ? (
          <button type="button" className={style.button} onClick={changeInput}>
            <IconPen />
          </button>
        ) : (
          <button type="submit" className={style.button}>
            Arrow
          </button>
        )}
      </fieldset>
    </form>
  );
}

export default MainInput;
