import { useState } from "react"

const Aislado = () => {

  const [contador, setContador] = useState(0)

  function handleClick () {
    setContador(contador + 1)
  }

  return (
    <div>
      <h3>El Estado es Aislado</h3>
      <p>{contador}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Aislado
