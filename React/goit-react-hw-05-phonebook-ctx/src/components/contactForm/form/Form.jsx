import React from "react";
import styles from "./Form.module.css";

const ContactForm = ({ handleChange, handleSubmit, name, number }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            name="name"
            value={name}
            type="text"
            placeholder="name..."
            className={styles.input}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            name="number"
            value={number}
            type="tel"
            placeholder="phone..."
            className={styles.input}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
