import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ handleFilterChange, value }) => {
  return (
    <>
      <input
        className={styles.filter}
        value={value}
        name="filter"
        type="tel"
        placeholder="find contacts by name..."
        onChange={handleFilterChange}
      />
    </>
  );
};

export default Filter;
