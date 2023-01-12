/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";

function Button({ type, children }) {
  return <button type={type}>{children}</button>;
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
