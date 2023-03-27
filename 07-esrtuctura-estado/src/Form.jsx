import { useState } from "react";

const Form = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFistNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }

  return (
  <div>
    <input type="text"
    onChange={handleFistNameChange}
    value={firstName} />
    <input type="text" 
    onChange={handleLastNameChange}
    value={lastName} />
    <p>El nombre completo es: {fullName}</p>
  </div>
  )
}

export default Form