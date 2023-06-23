import React from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const App: React.FC = () => {
  return (
    <div>
      <ContactList />
      <ContactForm />
    </div>
  )
}

export default App
