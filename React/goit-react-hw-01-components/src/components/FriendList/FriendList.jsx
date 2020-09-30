import React from "react";
import FriendListItem from "./FriendListItem";
import NoFriendsFound from "./NoFriendsFound";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  // console.log(friends);
  return friends.length !== 0 ? (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            styles={styles}
          />
        );
      })}
    </ul>
  ) : (
    <NoFriendsFound />
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
