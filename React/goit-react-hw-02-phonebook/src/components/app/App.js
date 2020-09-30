import React, { Component } from "react";

import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList.jsx";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

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
