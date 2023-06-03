import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './Style/style-app.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {

    const searchSameName = this.state.contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())
   
    if (searchSameName) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        ...data,
        id: nanoid(7),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  showContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleCont = this.showContacts();

    return (
      <div className={css.total_box}>
        <h1>Phonebook</h1>
        <ContactForm submitDate={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} changeFilter={this.changeFilter} />

        <ContactList
          contacts={visibleCont}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
