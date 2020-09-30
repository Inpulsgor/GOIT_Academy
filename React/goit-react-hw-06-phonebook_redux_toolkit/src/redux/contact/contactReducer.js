import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactAction from "./contactAction";

const onAddContact = (state, action) => {
  return [...state, action.payload.contact];
};
const onDeleteContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const onFilterContact = (state, action) => {
  return action.payload;
};

const contacts = createReducer([], {
  [contactAction.addContact]: onAddContact,
  [contactAction.deleteContact]: onDeleteContact,
});

const filter = createReducer("", {
  [contactAction.filterContact]: onFilterContact,
});

export default combineReducers({
  contacts,
  filter,
});

// state.filter((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );

// componentDidMount() {
//   const contactsStorage = localStorage.getItem("contacts");
//   if (contactsStorage) {
//     this.setState({ contacts: JSON.parse(contactsStorage) });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

// handleChangeFilter = ({ target: { value } }) =>
//   this.setState({ filter: value });

//   this.state.contacts.find(({ name }) => name === contact.name)
//     ? alert(`${contact.name} already exists`)
//     : this.setState((prev) => {
//         return { contacts: [...prev.contacts, contact] };
//       });
// };

// filterContact = () => {
//   const { contacts, filter } = this.state;
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
