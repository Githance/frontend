/* eslint-disable react/self-closing-comp */
import Button from '../button/button'
import style from './presentation.module.css'

export default function Presentation() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <h1 className={style.title}>Мы — сообщество единомышленников</h1>
      <p className={style.subtitle}>Делаем вместе IT-проекты для портфолио и бизнеса.
С&nbsp;нами ты можешь создать свой проект или&nbsp;присоединиться к существующему.</p>
<Button className={style.button}>Присоединиться к сообществу</Button>
<div className={style.man_image}></div>
      <div className={style.woman_image}></div>
      </div>
      
    </div>
  )
}
