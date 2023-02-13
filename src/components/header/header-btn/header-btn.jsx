/* eslint-disable react/prop-types */
import style from './header-btn.module.css'

export default function HeaderBtn({text}) {
  return (
    <button className={style.button} type='button'>
      {text}
    </button>
  )
}

