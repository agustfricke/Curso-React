import { useState } from "react"

const Multiple = () => {
  // Podemos una componente con multiples variables de estado
  const [contador, setContador] = useState(0)
  const [show, setShow] = useState(true)

  function handleContador () {
    setContador(contador + 1)
  }

  function handleShow () {
    setShow(!show)
  }

  return (
    <div>
      <h3>Multiples Variables de Estado</h3>
      <button onClick={handleShow}>
      { show ? 'Ocultar' : 'Mostrar' } contador
      </button>
      {
        show && 
        <div>
        <p>{contador}</p>
        <button onClick={handleContador}>+</button>
        </div>
      }
    </div>
  )
}

export default Multiple
