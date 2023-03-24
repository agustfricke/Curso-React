// Como vemos aqui tenemos 1 solo estado, y este estado es un objeto con los datos del usuario
// Y para cambiar el estado usamos el metodo setUser, esto es bueno si queremos actualizar todo el 
// estado junto, pero si solo queremos actualizar un dato del estado, tenemos que hacerlo de la siguiente manera: 
// setUser({
//   ...user,
//   name: 'Jane'
// })
// porque si no, el estado se va a sobreescribir y solo va a quedar el nombre actualizado
import { useState } from "react"

export const NewForm = () => {

    const [user, setUser] = useState({
        name: 'John',
        lastName: 'Doe'
    })

    const handleClick = () => {
        setUser({
            name: 'Jane',
            lastName: 'Carter'
        })}

  return (
    <div>
        <p>{user.name}</p>
        <p>{user.lastName}</p>
        <button onClick={handleClick}>Change state</button>
    </div>
  )
}
