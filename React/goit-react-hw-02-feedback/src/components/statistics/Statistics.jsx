import React from "react";
import Notification from "./notification/Notification";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      {total > 0 ? (
        <>
          <h2 className={styles.title}>Statistics</h2>
          <p className={styles.good}>Good:{good}</p>
          <p className={styles.neutral}>Neutral:{neutral}</p>
          <p className={styles.bad}>Bad:{bad}</p>
          <p className={styles.total}>Total:{total}</p>
          <p className={styles.percentage}>PositiveFeedback:{percentage}%</p>
        </>
      ) : (
        <Notification styles={styles} message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;
