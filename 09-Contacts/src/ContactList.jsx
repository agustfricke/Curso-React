
const ContactList = ({ contacts, onSelect }) => {

  return (

    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => 
          <li key={contact.email}>
            <button onClick={() => onSelect(contact)}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ContactList
