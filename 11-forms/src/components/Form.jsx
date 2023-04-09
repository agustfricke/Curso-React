// Como vimos en el capitulo de Eventos, vimos como cambiar el comportameinto por defecto de los formularios
// Por lo general en el input vamos a nesesitar almacenar alamcenar el valor que contiene en estado
// en este capitulo te voy a ensenar como se hace esto
// Para controlar el input podemos usar el onChange de la siguiente manera
import { useState } from "react"

const Form = () => {

  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`El nombre es: ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
