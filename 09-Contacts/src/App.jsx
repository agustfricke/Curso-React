import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

function App() {
  
  const [to, setTo] = useState(contacts[0])

  return (
    <>
      <ContactList 
      contacts={contacts}
      onSelect={contact => setTo(contact)}
      />
      <Chat contact={to}/>
      <Chat key={to.email} contact={to}/>
    </>
  );
}
export default App

const contacts = [
  { name: 'John', email: 'john@email.com'},
  { name: 'Jane', email: 'jane@email.com'},
  { name: 'Jack', email: 'jack@email.com'}
]

