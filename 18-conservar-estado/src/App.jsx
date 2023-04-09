import { useState } from "react"
import Chat from "./Chat"
import ContactList from "./ContactList"

function App() {

  const [to, setTo] = useState(contacts[0])

  return (
    <>
      <ContactList 
      contacts={contacts}
      onSelect={contact => setTo(contact)}
    />
    <Chat key={to.email} contact={to}/>
    </>
  )
}

export default App

const contacts = [
  {name: 'John', email: 'john@email.com'},
  {name: 'Jane', email: 'jane@email.com'}
]