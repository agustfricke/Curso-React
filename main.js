function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

function App () {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert('¡Enviando!');
      }}>
        <input />
        <button>Enviar</button>
      </form>
    );
  }
export default App 