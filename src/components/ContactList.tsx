import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'
import ContactItem from './ContactItem'

const ContactList: React.FC = () => {
  const contacts = useSelector(
    (state: typeof RootState) => state.contacts.contacts
  )

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contacts.map((contact: any) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  )
}
