import React from 'react';
import shortid from 'shortid';

export const ContactForm = ({ addContact, onChange, number, name }) => {
  const nameId = shortid.generate();
  const numberId = shortid.generate();
  return (
    <>
      <form onSubmit={addContact}>
        <label htmlFor={nameId}>
          Name
          <input
            onChange={onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={nameId}
            required
            value={name}
          />
        </label>
        <label htmlFor={numberId}>
          Number
          <input
            onChange={onChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={numberId}
            value={number}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
