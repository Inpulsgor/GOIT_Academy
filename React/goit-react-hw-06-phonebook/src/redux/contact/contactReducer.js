import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./contactType";
import { combineReducers } from "redux";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload.contact];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER_CONTACT:
      return payload.filter;

    default:
      return state;
  }
};

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
