import React from "react";
import styles from "../ContactList.module.css";

const { listItem, name, phone, deleteButton } = styles;

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={listItem}>
      <p className={name}>
        <b>Name:</b>
        {contact.name}
      </p>
      <p className={phone}>
        <b>Phone:</b>
        {contact.number}
      </p>
      <button
        className={deleteButton}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
