export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'

export interface Contact {
  id: number
  fullName: string
  email: string
  phone: string
}

export interface ContactState {
  contacts: Contact[]
}

export type ContactActionTypes =
  | { type: typeof ADD_CONTACT; payload: Contact }
  | { type: typeof REMOVE_CONTACT; payload: number }
  | { type: typeof EDIT_CONTACT; payload: Contact }
