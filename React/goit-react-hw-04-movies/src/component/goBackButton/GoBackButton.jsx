import React from "react";
import styles from "./goBackButton.module.scss";
const { goBackBtn } = styles;

const GoBackButton = ({ GoBack }) => {
  return (
    <button onClick={GoBack} className={goBackBtn} type="button">
      Go Back
    </button>
  );
};

export default GoBackButton;
