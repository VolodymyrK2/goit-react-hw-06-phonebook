import { useState, useEffect } from 'react'
import css from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactsList/ContactsList'

const App = () => {
   
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm/>
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    )
}
export default App