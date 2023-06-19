import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, editContact } from '../actions/contactActions'
import { Contact } from '../reducers/ContactReducer'

interface ContactFormProps {
  contact?: Contact
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState(contact ? contact.fullName : '')
  const [email, setEmail] = useState(contact ? contact.email : '')
  const [phone, setPhone] = useState(contact ? contact.phone : '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newContact: Contact = {
      id: contact ? contact.id : Date.now(),
      fullName,
      email,
      phone
    }
    if (contact) {
      dispatch(editContact(newContact))
    } else {
      dispatch(addContact(newContact))
    }
    setFullName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div>
      <h2>{contact ? 'Editar Contato' : 'Adicionar Contato'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">{contact ? 'Editar' : 'Adicionar'}</button>
      </form>
    </div>
  )
}

export default ContactForm
