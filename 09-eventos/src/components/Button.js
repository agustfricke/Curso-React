// Simple controladores de eventos
const Button = () => {

  function handleClick() {
    alert('Evento Click!')
  }

  return (
    <>
    <button onClick={handleClick}>Click me!</button>
    <button onClick={function handleClick2() {
        alert('Evento click en JSX')
      }}>Click funcion en JSX</button>
    <button onClick={() => {
      alert('Click con arrow function') 
    }}>Click con funcion flecha!</button>
    </>
  )
}
export default Button
