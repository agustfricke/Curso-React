// Aveces no estamos seguros de si usar una sola variable de estado o multiples variables de estado
// En este caso usamos 2 estados diferentes para manejar el nombre y el apellido
// Y es totalmente valido, pero si tenemos un objeto con los datos de un usuario, es mejor usar un solo estado
import { useState } from "react"

const Form = () => {

  const [name, setName] = useState('John')
  const [lastName, setLastName] = useState('Doe')

  const handleClick = () => {
    setName('Jane')
    setLastName('Carter')
  }

  return (
    <div>
      <p>{name}</p> 
      <p>{lastName}</p>
      <button onClick={handleClick}>Change State</button>
    </div>
  )
}

export default Form
