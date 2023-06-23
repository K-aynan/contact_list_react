import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import { ContactState } from '../reducers/ContactReducer'

import { Contact } from '../models/ContactModels'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: ContactState) => state.contacts.contacts)

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contacts.map((contact: Contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

export default ContactList
