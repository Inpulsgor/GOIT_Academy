import { configureStore } from "@reduxjs/toolkit";
import contactsReducers from "./contacts/contactsReducers";
import themeReducers from "./theme/themeReducers";

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    theme: themeReducers,
  },
});

export default store;
