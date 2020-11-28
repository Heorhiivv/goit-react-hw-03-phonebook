import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "../ContactsList/ContactItem";

const ContactsList = ({contacts, onRemoveContact}) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <ContactItem key={id} name={name} number={number} onRemove={() => onRemoveContact(id)} />
    ))}
  </ul>
)
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number
};
export default ContactsList
