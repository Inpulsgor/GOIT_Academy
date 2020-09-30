import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  const { Button } = styles;
  return (
    <button type="button" className={Button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
