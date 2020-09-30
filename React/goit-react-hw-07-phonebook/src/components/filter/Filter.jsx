import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./Filter.module.css";

const { filter } = styles;

const Filter = ({ handleFilterChange, value }) => {
  return (
    <>
      <h2>Search</h2>
      <input
        className={filter}
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
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  handleFilterChange: contactsActions.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
