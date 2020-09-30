import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={styles.buttonGood}
        name="good"
        onClick={onLeaveFeedback}
        type="button"
      >
        good
      </button>
      <button
        className={styles.buttonNeutral}
        name="neutral"
        onClick={onLeaveFeedback}
        type="button"
      >
        neutral
      </button>
      <button
        className={styles.buttonBad}
        name="bad"
        onClick={onLeaveFeedback}
        type="button"
      >
        bad
      </button>
    </>
  );
};

export default FeedbackOptions;
