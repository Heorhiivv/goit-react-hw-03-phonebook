import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from "uuid";

import css from '../ContactForm/ContactFrom.module.css';
class ContactForm extends Component {
  static propTypes = {
    onAddContact : PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(task)

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={css.PhoneBookForm} onSubmit={this.handleSubmit}>
        <label className="PhoneBookForm-label">
          <p>Name</p>
          <input
            className={css.PhoneBookInput}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label className="PhoneBookForm-label">
         <p>Number</p>
          <input
            className={css.PhoneBookInput}
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  };
};
export default ContactForm
