import React from "react";
import styles from "./Form.module.css";

const { form, label, input, button } = styles;

const ContactForm = ({ handleChange, handleSubmit, name, number }) => {
  return (
    <>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit} className={form}>
        <label className={label}>
          Name
          <input
            name="name"
            value={name}
            type="text"
            placeholder="name..."
            className={input}
            onChange={handleChange}
          />
        </label>

        <label className={label}>
          Number
          <input
            name="number"
            value={number}
            type="tel"
            placeholder="phone..."
            className={input}
            onChange={handleChange}
          />
        </label>
        <button className={button} type="submit">
          add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
