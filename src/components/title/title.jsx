/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./title.module.css";

function Title({ children, className }) {
  return <p className={cn(style.title, className)}>{children}</p>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Title;
