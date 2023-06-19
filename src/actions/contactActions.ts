import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  EDIT_CONTACT,
  ContactActionTypes
} from '../reducers/ContactReducer'

export const addContact = (contact: Contact): ContactActionTypes => {
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

export const removeContact = (id: number): ContactActionTypes => {
  return {
    type: REMOVE_CONTACT,
    payload: id
  }
}

export const editContact = (contact: Contact): ContactActionTypes => {
  return {
    type: EDIT_CONTACT,
    payload: contact
  }
}

export interface Contact {
  id: number
  fullName: string
  email: string
  phone: string
}
