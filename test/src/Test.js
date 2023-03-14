import { useState } from "react";

function Test() {

  const [index, setIndex] = useState(0)
  const [text, setText] = useState(false)

  function handleShow () {
    setText(!text)
  }

  function handleClick () {
      setIndex(index + 1)
    }

  return (
    <div>
      {index}
      <button onClick={handleClick}>+</button>
      <button onClick={handleShow}>{text ? 'Ocultar' : 'Mostrar'}</button>
      {text && <p>Hola soy un texto random</p>}
    </div>
  );
}

export default Test;
