// Aca tenemos los estados de name y lastName, y el estado de fullName
// Luego a fullNama le asignamos el valor de name + ' ' + lastName 
// durante el renderizado, en vez de hacerlo en el onChange de los inputs
import { useState } from 'react';

const Form2 = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = name + ' ' + lastName;

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form>
      <input value={name} onChange={handleNameChange} /> 
      <input value={lastName} onChange={handleLastNameChange} />
      <h1>Nombre completo: {fullName}</h1>
    </form>
  )
}

export default Form2
