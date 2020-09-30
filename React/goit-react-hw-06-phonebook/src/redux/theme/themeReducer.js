import { THEME_TOGGLE } from "./themeType";

function themeReducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case THEME_TOGGLE:
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}

export default themeReducer;
