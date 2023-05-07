import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    console.dir(e.currentTarget);
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.equalContacts(e)) {
      Notiflix.Notify.failure(`${this.state.name} already in contacts`);
      return;
    };

    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));

    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
      filter: '',
    });
  };

  filter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  equalContacts = e => {
    return this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );
  };

  render() {
    const filteredContacts = this.filter();
    const { name, number, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.handleSubmit}
          onChange={this.handleChange}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} filter={filter} />
        <ContactList contacts={filteredContacts} />
      </>
    );
  }
}
