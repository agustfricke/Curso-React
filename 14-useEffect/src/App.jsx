import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [cuenta, setCuenta] = useState(0)


  useEffect(() => {
    console.log('Se volvio a renderizar')
  }, [])



  function handleClick () {
    setCount(count + 1)
  }

  function handleClick2 () {
    setCuenta(cuenta + 1)
  }



  return (
    <>
    <button onClick={handleClick}>
      +
    </button>
    <button onClick={handleClick2}>
      +
    </button>
      <p>El contador 1 es:  {count}</p>
      <p>El contador 2 es:  {cuenta}</p>
    </>
  );
}
export default App


  // useEffect(() => {
  //   // rendeiza cada vez
  // })

  // useEffect(() => {
  //   //Correr solo una vez
  // }, [])

  // useEffect(() => {
  //   // Correr cuando cambie el estado
  //   // Correr una sola vez
  // }, [prop, state])