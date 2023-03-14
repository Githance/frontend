import { useState, useRef, useCallback, useEffect } from "react";
import style from "./main-input.module.css";
import IconPen from "../icon-pen/icon-pen";

function MainInput({ text, onChange, type }) {
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
    <form className={style.form} onSubmit={onSubmit} noValidate>
      <input
        maxLength="38"
        onBlur={blurInput}
        ref={inputRef}
        disabled={disabledInput}
        type="text"
        value={text}
        className={`${style.input} ${
          inputType(type)
            ? style.input_type_primary
            : style.input_type_secondary
        }`}
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
    </form>
  );
}

export default MainInput;
