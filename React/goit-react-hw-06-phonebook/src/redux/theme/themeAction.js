import { THEME_TOGGLE } from "./themeType";

const toggleTheme = (theme) => ({
  type: THEME_TOGGLE,
  payload: {
    theme,
  },
});

export default { toggleTheme };
