// Acualmente este componente almacena el elemento seleccionado 
// como un objeto en el estado de selectedItem y esto no es bueno porque
// el contenido de selectedItems es el mismo objecto que se encuentra en el array items
// Esto significa que esta infromacion esta duplicada y si le damos a elegir a un 
// elemento y luego  lo actulizamos el input se va a actualizar pero la etiqueta 
// de abajo no se va a acualizar, entonces para arrgelar esto vamos a eliminar la duplicacion
import { useState } from "react"

const initialItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]

const Items = () => {
 const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  console.log(items);
  console.log(selectedItem)

  return (
    <>
      <h2>What's your travel snack?</h2> 
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.name}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedItem(item);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.name}.</p>
    </>
  )
}

export default Items

