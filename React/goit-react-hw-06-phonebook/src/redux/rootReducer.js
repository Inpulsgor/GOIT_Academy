import { combineReducers } from "redux";
import contactReducer from "./contact/contactReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  theme: themeReducer,
});

export default rootReducer;
