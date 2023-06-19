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

export interface Contact {
  id: number
  fullName: string
  email: string
  phone: string
}

export interface ContactState {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: []
}

const contactReducer = (
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

export default contactReducer
