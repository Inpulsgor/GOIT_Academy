import { createAction } from "@reduxjs/toolkit";

const toggleTheme = createAction("theme/THEME_TOGGLE", (theme, isOpen) => ({
  payload: {
    theme: {
      isOpen,
    },
  },
}));

export default { toggleTheme };
