import React from "react";

import StatisticsItems from "./StatisticsItems";
import styles from "./Statistics.module.css";

const Statistics = ({ stats, title }) => {
  //   console.log(data);
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map((item) => (
          <StatisticsItems key={item.id} item={item} styles={styles} />
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "Shit! Sorry... no data",
};

export default Statistics;
