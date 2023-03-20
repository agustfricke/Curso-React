// En React debemos tratar a los arrays como si fueran inmutables al igual que los objectos
// Cunado queremos actualizar un array debemos hacer una copia y luegoe stablecer el estado para usar
// el nuevo array


import { useState } from "react"

const Simple = () => {

  const [numeros, setNumeros] = useState([1,2,3])
  const newArr = [4,5,6]

  const handleArr = () => {
    setNumeros(newArr)
  }

  const handleArr2 = () => {
    setNumeros(prevState => [prevState, newArr])
  }

  return (
    <div>
      {numeros}
      <button onClick={handleArr}>Agregar mas numeros</button>
      <button onClick={handleArr2}>Agregar mas numeros correctamente</button>
    </div>
  )
}

export default Simple
