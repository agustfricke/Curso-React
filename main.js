function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function App () {
    return (
      <div onClick={() => {
        alert('¡Cliqueaste el Div!');
      }}>
        <button onClick={() => alert('Hola!')}>
          Hola
        </button>
        <button onClick={() => alert('Chau!')}>
          Chau
        </button>
      </div>
    );
  }
export default App 