import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/ADD_REQUEST");
const addContactSuccess = createAction("contact/ADD_SUCCESS");
const addContactError = createAction("contact/ADD_ERROR");

const fetchContactsRequest = createAction("contact/FETCH_REQUEST");
const fetchContactsSuccess = createAction("contact/FETCH_SUCCESS");
const fetchContactsError = createAction("contact/FETCH_ERROR");

const removeContactRequest = createAction("contact/REMOVE_REQUEST");
const removeContactSuccess = createAction("contact/REMOVE_SUCCESS");
const removeContactError = createAction("contact/REMOVE_ERROR");

const deleteContact = createAction("contact/DELETE_CONTACT");
const filterContact = createAction("contact/FILTER_CONTACT");

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  deleteContact,
  filterContact,
};
