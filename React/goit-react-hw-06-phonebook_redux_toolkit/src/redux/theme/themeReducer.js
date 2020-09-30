import { createReducer } from "@reduxjs/toolkit";
import themeAction from "./themeAction";

const onToggle = (state, action) => {
  return { ...state, isOpen: !state.isOpen };
};

const themeReducer = createReducer(
  { isOpen: false },
  {
    [themeAction.toggleTheme]: onToggle,
  }
);

export default themeReducer;
