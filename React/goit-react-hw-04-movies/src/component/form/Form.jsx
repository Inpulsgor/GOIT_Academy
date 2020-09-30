import React, { Component } from "react";
import styles from "./form.module.scss";

const { moviesForm, moviesInput } = styles;

class Form extends Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ inputValue: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.props.onSubmit(inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={moviesForm}>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleChange}
          className={moviesInput}
          placeholder="Search..."
        />
      </form>
    );
  }
}

export default Form;
