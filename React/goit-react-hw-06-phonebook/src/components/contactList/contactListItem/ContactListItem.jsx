import React from "react";
import styles from "../ContactList.module.css";

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.name}>
        <b>Name:</b>
        {contact.name}
      </p>
      <p className={styles.phone}>
        <b>Phone:</b>
        {contact.number}
      </p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
