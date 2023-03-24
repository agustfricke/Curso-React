import { useState } from "react";
import { initialTravelPlan } from "./Datos"; 

// 1. La funcion PlaceTree recibe un objeto place que viene como prop de Places
function PlaceTree({ place }) {

  // 2. El objeto place tiene un atributo llamado childPlaces que es un array de objetos 
  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {/* 3. Si el array childPlaces tiene elementos, se renderiza un ol con los elementos del array */}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

// 1. El componente Places es el componente raiz de la aplicacion.
export default function Places() {
  // 2. Ponemos el estado en plan donde tiene el valor de todo el array de datos de initialTravelPlan
  const [plan, setPlan] = useState(initialTravelPlan);
  // 3. El estado plan tiene un atributo llamado childPlaces que es el mismo array pero sin el root
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      {/* Aqui pasamos el PlaceTree que al final solo estamos renderizando los planetas de arreglo */}
      <ol>
        {planets.map(place => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}

// Ahora supongamos que queremos tener un boton para eliminar un lugar al cual ya visitamos
// Esto podria ser una tarea tediosa por lo complicado que es el array
// para eso podemos normalizar el estado o dejarlo mas ordenado y facil de manipular asi que hagamos eso
