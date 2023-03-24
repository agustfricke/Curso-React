import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId
  );
  // Ahora si editamos el elemento seleccionado la etiquesta <p> se va a actualizar inmediatamente
  // Esto es porque setItems gatilla un re-render y items.find(...) va a encontrar el elemento actualizado
  // No necesitamos mantener el elemento seleccionado en el estado, ya que ahi no se va a acualizar
  // Solo nesesitamos el id seleccionado y el resto se puede calcular durante el render

  console.log(selectedId)
  console.log(items)

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </div>
  );
}
