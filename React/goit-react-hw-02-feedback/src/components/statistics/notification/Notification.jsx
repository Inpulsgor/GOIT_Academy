import React from "react";

const Notification = ({ message, styles }) => {
  return <p className={styles.hello}>{message}</p>;
};

export default Notification;
