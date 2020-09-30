import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch } from "@material-ui/core";
import Loader from "react-loader-spinner";

import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import themeActions from "../../redux/theme/themeActions";
import styles from "./App.module.css";

const { dark, light, app, loader } = styles;

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts, isOpen, isLoading, toggle } = this.props;
    return (
      <>
        <div className={isOpen ? dark : light}>
          <Switch checked={isOpen} onChange={toggle} />
          <div className={app}>
            {isLoading ? (
              <Loader
                className={loader}
                type="Oval"
                color="#1A237E"
                height={125}
                width={125}
              />
            ) : (
              <>
                <ContactForm />
                {contacts.length > 0 && (
                  <>
                    <Filter />
                    <ContactList />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isOpen: contactsSelectors.getTheme(state),
    isLoading: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  toggle: themeActions.toggleTheme,
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
