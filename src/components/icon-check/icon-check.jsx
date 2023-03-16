import cn from "classnames";
import style from "./icon-check.module.css";

function IconCheck({ className }) {
  return <div className={cn(style.icon, className)}></div>;
}

export default IconCheck;
