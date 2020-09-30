import React from "react";
import styles from "./FriendList.module.css";

const image = "https://memegenerator.net/img/instances/400x/49513398.jpg";

const NoFriendsFound = () => {
  return (
    <img
      className={styles.image}
      src={image}
      alt="you don't have friends anymore"
    />
  );
};

export default NoFriendsFound;
