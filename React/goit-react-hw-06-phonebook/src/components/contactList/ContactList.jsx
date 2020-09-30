import React from "react";
import { connect } from "react-redux";
import ContactListItem from "./contactListItem/ContactListItem";
import contactAction from "../../redux/contact/contactAction";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete, onFilter }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={() => onDelete(contact.id)}
            filterContact={() => onFilter(contact.id)}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.contacts;
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = {
  onDelete: contactAction.deleteContact,
  onFilter: contactAction.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
