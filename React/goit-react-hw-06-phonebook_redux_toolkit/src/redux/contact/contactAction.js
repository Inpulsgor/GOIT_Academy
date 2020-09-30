import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contact/ADD_CONTACT", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("contact/DELETE_CONTACT");
const filterContact = createAction("contact/FILTER_CONTACT");

export default {
  addContact,
  deleteContact,
  filterContact,
};
