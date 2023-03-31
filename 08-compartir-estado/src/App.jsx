import { useState } from "react";
import Card from "./Card";

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>

      <Card 
      title="Card 1"
      isActive={activeIndex === 0}
      onShow={() => setActiveIndex(0)}
      >
      Este es el hijo de la card numero 1
      </Card>

      <Card 
      title="Card Numero 2"
      isActive={activeIndex === 1}
      onShow={() => setActiveIndex(1)}
      >
      Este es el children de la card numero 2 como ejemplo
      </Card>

    </>
  );
}
export default App

