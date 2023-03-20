// Prevenir el comportamiento por defecto
const Forms = () => {



  return (
    <>
    <form onSubmit={() => alert('Formulario enviado')}>
      <input placeholder="Username"/>
      <button>Submit</button>
    </form>

    <form onSubmit={e => {
      e.preventDefault();
      alert('Fomulario Enviado son Recargar pagina!');
    }}>
      <input placeholder="Username"/>
      <button>Submit</button>
    </form>
    </>
  )

}
export default Forms
