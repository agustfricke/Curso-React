// Si podemos calcular el valor de un estado basado en el valor de 
// otro estado, no es necesario que el estado sea parte del estado del componente. 
// Podemos calcularlo en el momento de la renderización.
// Como vamos a hacer en Form2.jsx
import { useState } from 'react';

const Form = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(name + ' ' + e.target.value);
  }


  return (
    <>
      <form>
        <input value={name} onChange={handleNameChange} />
        <input value={lastName} onChange={handleLastNameChange} />
        <h1>Nombre completo: {fullName}</h1>
      </form>
    </>
  )

}
export default Form;
