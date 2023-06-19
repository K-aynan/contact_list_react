import React from 'react'
import { useDispatch } from 'react-redux'
import { removeContact } from '../actions/contactActions'
import { Contact } from '../reducers/ContactReducer'

interface ContactItemProps {
  contact: Contact
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeContact(contact.id))
  }

  return (
    <li>
      <span>{contact.fullName}</span>
      <span>{contact.email}</span>
      <span>{contact.phone}</span>
      <button onClick={handleRemove}>Remover</button>
    </li>
  )
}

export default ContactItem
