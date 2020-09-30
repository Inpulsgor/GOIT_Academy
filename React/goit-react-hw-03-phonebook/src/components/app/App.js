import React, { Component } from "react";

import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList.jsx";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsStorage = localStorage.getItem("contacts");
    if (contactsStorage) {
      this.setState({ contacts: JSON.parse(contactsStorage) });
      // console.log(JSON.parse(contactsStorage));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

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

  handleChangeFilter = ({ target: { value } }) =>
    this.setState({ filter: value });

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContact = this.filterContact();
    return (
      <>
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
      </>
    );
  }
}

export default App;
