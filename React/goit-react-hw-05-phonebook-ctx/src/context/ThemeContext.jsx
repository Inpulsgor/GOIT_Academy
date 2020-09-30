import React, { Component, createContext } from "react";

const Context = createContext();

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggle = () => this.setState((state) => ({ isOpen: !state.isOpen }));

  state = {
    isOpen: false,
    themeToggle: this.toggle,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ThemeContext;
