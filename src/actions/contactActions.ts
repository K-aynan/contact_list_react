import { Contact } from '../models/ContactModels'

export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'

interface AddContactAction {
  type: typeof ADD_CONTACT
  payload: Contact
}

interface RemoveContactAction {
  type: typeof REMOVE_CONTACT
  payload: number
}

interface EditContactAction {
  type: typeof EDIT_CONTACT
  payload: Contact
}

export type ContactActionTypes =
  | AddContactAction
  | RemoveContactAction
  | EditContactAction

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
