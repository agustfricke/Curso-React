import { useState } from "react"

const UseState = () => {

  // 1- Es una vraible de estado 
  // 2- Una funcion para actualizar el estado
  const [contador, setContador] = useState(0)

  function handleClick () {
    setContador(contador + 1)
  }

  return (
    <div>
      <h3>useState</h3>
      <p>{contador}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default UseState
