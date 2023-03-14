import style from "./main-input.module.css";

function MainInput({ text, onChange, onSubmit, type }) {

  const inputType = (type) => {
    return type === "primary" ? true : false;
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        className={`${style.input} ${
          inputType(type) ? style.input_type_primary : style.input_type_secondary
        }`}
        onChange={onChange}
      />
      <button type="submit" className={style.button}></button>
    </form>
  );
}

export default MainInput;
