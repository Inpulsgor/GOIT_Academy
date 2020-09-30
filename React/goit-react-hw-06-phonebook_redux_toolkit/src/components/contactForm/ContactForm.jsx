import React, { Component } from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contact/contactAction";
import Form from "../contactForm/form/Form";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    name !== "" && number !== "" && this.props.onSubmit(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          number={number}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: contactAction.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
