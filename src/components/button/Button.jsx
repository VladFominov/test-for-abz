import React from "react";
import PropTypes from "prop-types";

import styles from "./_button.module.scss"

const Button = ({
  children,
  className,
  onClick,
  handlClick,
  type,
  isDisabled,
}) => {
  const buttonClass = className
    ? `${styles.btn} ${className}`
    : styles.btn;
  return (
    <div>
      <button
        className={buttonClass}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        handlClick={handlClick}
      >
        {children}
      </button>
    </div>
  );
};
Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  handlClick: PropTypes.func,
};
