import React from "react";

function generateColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

const StatisticsItems = ({ item: { id, label, percentage }, styles }) => {
  return (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: generateColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItems;
