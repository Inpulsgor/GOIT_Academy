import React, { Component } from "react";
import styles from "../searchbar/Searchbar.module.css";

class Searchbar extends Component {
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
    const {Searchbar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} = styles;
    return (
      <header className={Searchbar}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <button className={SearchFormButton} type="submit">
            <span className={SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={SearchFormInput}
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
