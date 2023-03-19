// Leyendo props en controladores de eventos
const AlertButton = ({ message, children }) => {

  return (
    <button onClick={() => alert(message)}>
    { children }
    </button>
  )

}
export default AlertButton
