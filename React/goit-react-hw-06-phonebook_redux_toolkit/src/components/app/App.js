import React from "react";
import { connect } from "react-redux";
import themeAction from "../../redux/theme/themeAction";

import { Switch } from "@material-ui/core";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import styles from "./App.module.css";

const App = ({ contacts, isOpen, toggle }) => {
  return (
    <>
      <div className={isOpen ? styles.dark : styles.light}>
        <Switch checked={isOpen} onChange={toggle} />
        <div className={styles.app}>
          <ContactForm />
          {contacts.length > 0 && (
            <>
              <Filter />
              <ContactList />
            </>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ contacts, theme }) => {
  return {
    contacts: contacts.contacts,
    isOpen: theme.isOpen,
  };
};

const mapDispatchToProps = {
  toggle: themeAction.toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
