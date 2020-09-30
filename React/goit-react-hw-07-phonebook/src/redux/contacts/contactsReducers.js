import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsActions from "./contactsActions";

const onAddContact = (state, action) => {
  return [...state, action.payload];
};
const onDeleteContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const onFilterContact = (state, action) => {
  return action.payload;
};

const contacts = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: onAddContact,
  [contactsActions.removeContactSuccess]: onDeleteContact,
});

const filter = createReducer("", {
  [contactsActions.filterContact]: onFilterContact,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
