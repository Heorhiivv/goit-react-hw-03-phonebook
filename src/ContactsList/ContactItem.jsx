import React from "react";
import PropTypes from 'prop-types';
import css from '../ContactsList/Contact.module.css'

const ContactItem = ({name, number, onRemove}) => {
 return (
  <li className={css.contactItem}>
  <p className={css.itemText}>{name}:</p>
  <p className={css.itemText}>{number}</p>
  <section>
    <button type="button" className="ContactList-button" onClick={onRemove}>
      Delete
    </button>
  </section>
</li>
 );
};

ContactItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
export default ContactItem
