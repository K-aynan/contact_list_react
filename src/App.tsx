import React from 'react'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'

const App: React.FC = () => {
  return (
    <div>
      <ContactList />
      <ContactForm />
    </div>
  )
}

export default App
