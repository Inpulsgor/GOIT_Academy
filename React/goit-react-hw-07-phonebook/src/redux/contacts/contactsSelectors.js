import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getContacts = (state) => state.contacts.contacts;
const getTheme = (state) => state.theme.isOpen;
const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);

export default {
  getLoading,
  getContacts,
  getTheme,
  getFilter,
  getFilteredContacts,
};
