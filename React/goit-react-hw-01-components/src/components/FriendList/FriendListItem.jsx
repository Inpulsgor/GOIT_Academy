import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ id, avatar, name, isOnline, styles }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.active : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
};

export default FriendListItem;
