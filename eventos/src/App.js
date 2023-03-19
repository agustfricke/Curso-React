import Button from "./components/Button";
import AlertButton from "./components/AlertButton";
import EventosProps from "./components/EventosProps";
import Propagacion from "./components/Propagacion";
import Forms from "./components/Forms";

function App() {
  return (
    <>
      <Button/>

      <AlertButton message={'Hola React'}>
        Click Hola React 
      </AlertButton>

      <AlertButton message={'Hola JavaScript'}>
        Click Hola JavaScript 
      </AlertButton>

      <EventosProps onSmash={() => alert('Manejadores de eventos en props')}>
        Manejadores de eventos como props 
      </EventosProps>

      <div onClick={() => {
        alert('Le diste al div') 
      }}>
      <Propagacion onSmash={() => alert('Hola Svelte')}>
        Svelte 
      </Propagacion>
      <Propagacion onSmash={() => alert('Hola Go')}>
        Go 
      </Propagacion>
      </div>

      <Forms/>

    </>
  );
}

export default App;
