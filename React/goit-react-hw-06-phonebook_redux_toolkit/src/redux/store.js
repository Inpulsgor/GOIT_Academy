import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactReducer";
import themeReducer from "./theme/themeReducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    theme: themeReducer,
  },
});

export default store;
