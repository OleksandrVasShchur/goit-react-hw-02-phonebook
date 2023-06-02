import React from 'react';
import PropTypes from 'prop-types';
import css from '../Style/contactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.container}>
      {contacts.map(({ name, id, number }) => (
        <li className={css.boxList} key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className={css.button_delete} onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
