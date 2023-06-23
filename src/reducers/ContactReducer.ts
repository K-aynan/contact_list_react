import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  EDIT_CONTACT,
  ContactActionTypes,
  Contact
} from '../models/ContactModels'

export interface ContactState {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: []
}

export const contactReducer = (
  state = initialState,
  action: ContactActionTypes
): ContactState => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      }
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload
          }
          return contact
        })
      }
    default:
      return state
  }
}
