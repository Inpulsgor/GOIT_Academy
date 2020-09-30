import { createReducer } from "@reduxjs/toolkit";
import themeActions from "./themeActions";

const onToggle = (state, action) => {
  return { ...state, isOpen: !state.isOpen };
};

const themeReducer = createReducer(
  { isOpen: false },
  {
    [themeActions.toggleTheme]: onToggle,
  }
);

export default themeReducer;
