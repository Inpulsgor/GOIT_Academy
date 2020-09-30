import React, { Component } from "react";
import withTheme from "../hoc/withTheme/withTheme";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import { v4 as uuidv4 } from "uuid";
import { Switch } from "@material-ui/core";
import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsStorage = localStorage.getItem("contacts");
    if (contactsStorage) {
      this.setState({ contacts: JSON.parse(contactsStorage) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChangeFilter = ({ target: { value } }) =>
    this.setState({ filter: value });

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.state.contacts.find(({ name }) => name === contact.name)
      ? alert(`${contact.name} already exists`)
      : this.setState((prev) => {
          return { contacts: [...prev.contacts, contact] };
        });
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.filterContact();
    const {
      context: { isOpen, themeToggle },
    } = this.props;

    return (
      <div className={isOpen ? styles.dark : styles.light}>
        <Switch checked={isOpen} onChange={themeToggle} />
        <div className={styles.app}>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter handleFilterChange={this.handleChangeFilter} value={filter} />
          {filteredContact.length > 0 ? (
            <ContactList
              contacts={filteredContact}
              deleteContact={this.deleteContact}
            />
          ) : (
            <p>Sorry! Contacs list is empty :(</p>
          )}
        </div>
      </div>
    );
  }
}

export default withTheme(App);
