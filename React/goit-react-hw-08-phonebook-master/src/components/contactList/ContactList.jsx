import React from "react";
import { connect } from "react-redux";
import ContactListItem from "./contactListItem/ContactListItem";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
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

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = {
  onDelete: contactsOperations.removeContact,
  onFilter: contactsActions.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
