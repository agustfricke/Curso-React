import { useState } from "react";
import { initialTravelPlan } from "./Datos"; 


function PlaceTree({ id, parentId, placesById, onComplete }) {
  // Todo el arrat con los ids
  const place = placesById[id];
  // Solo los hijos copn los ids
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        // Para completar, nesesita el id del padre y el id del hijo
        onComplete(parentId, id);
        // ParentId === id del padre
        // id === id del hijo
      }}>
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
}

export default function TravelPlan() {
  // Ponemos todo el array de datos en el estado
    const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Creamos una nueva version del padre que no incluye el id del hijo
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id !== childId)
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
