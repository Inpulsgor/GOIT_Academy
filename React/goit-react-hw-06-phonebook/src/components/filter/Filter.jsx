import React from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contact/contactAction";
import styles from "./Filter.module.css";

const Filter = ({ handleFilterChange, value }) => {
  return (
    <>
      <h2>Search</h2>
      <input
        className={styles.filter}
        value={value}
        name="filter"
        type="tel"
        placeholder="find contacts by name..."
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  handleFilterChange: contactAction.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
