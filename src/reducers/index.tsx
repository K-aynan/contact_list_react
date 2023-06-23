import { combineReducers } from 'redux'
import { contactReducer } from './ContactReducer'
import { ContactState } from '../models/ContactModels'

export type RootState = ContactState

const rootReducer = combineReducers({
  contacts: contactReducer
})

export default rootReducer
