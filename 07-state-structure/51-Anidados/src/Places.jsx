import { useState } from "react";
import { initialTravelPlan } from "./Datos"; 


function PlaceTree({ id, placesById }) {
  // Ponemos todos el array
  const place = placesById[id];
  // El childIds contiene los ids de los hijos de cada planeta 
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              placesById={placesById}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  // Pasamos todo el array de objectos con ids
  const [plan, setPlan] = useState(initialTravelPlan);
  // Sacamos el root que es el primero
  const root = plan[0];
  // Sacamos los hijos de root que son los planetas
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            placesById={plan}
          />
        ))}
      </ol>
    </>
  );
}
