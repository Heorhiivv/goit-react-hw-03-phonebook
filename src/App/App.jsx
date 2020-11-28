import React, {Component} from "react";

import css from '../App/App.module.css';

import ContactsList from "../ContactsList/ContactsList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
      {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
      {id: "id-3", name: "Eden Clements", number: "645-17-79"},
      {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
    ],
    filter: "",
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState({contacts});
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  addContact = (task) => {
    const {contacts} = this.state
    if (contacts.find(({name}) => name === task.name)) {
      alert(`${task.name} is already in contacts`)
      return
    }
    this.setState((prevState) => {
      const contacts = [...prevState.contacts, task]
      return {contacts}
    })
  }

  removeContact = (task) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== task),
      }
    })
  }

  changeFilter = (filter) => {
    this.setState({filter})
  }

  getVisibleContacts = () => {
    const {contacts, filter} = this.state
    return contacts.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const {contacts, filter} = this.state
    const visibleContacts = this.getVisibleContacts()
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {contacts.length > 0 && <ContactsList onRemoveContact={this.removeContact} contacts={visibleContacts} />}
      </>
    )
  }
}

export default App
