// RENDERIZANDO ARRAYS

// Aveces tenemos colecctiones de datos que por lo general vienen del backend
// de nuestra apliacion, y basicamente nesesitamos manipular esos arrays
// de datos para mostrarlos en nuestreos componenetes de React

// Basicamente voy a empezar con este codigo de aqui:

import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home/>
    </div>
  );
}

export default App;


import React from "react";

const Home = () => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
        <ul>
        <li>Creola Katherine Johnson: mathematician</li>
        <li>Mario José Molina-Pasquel Henríquez: chemist</li>
        <li>Mohammad Abdus Salam: physicist</li>
        <li>Percy Lavon Julian: chemist</li>
        <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
        </ul>
        </div>
        </div>
    );
};

export default Home;


// Okey como vemos en el componente home tenemos muchos una lista de nombres
// Lo que vamos a hacer es meter eso datos dentro de un array llamado personas
// para poder trabajar con ellos

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

// Okey ahora mapiemos testa arry de people:


const listItems = people.map(person => <li>{person}</li>);
return <ul>{listItems}</ul>;

Date cuenta que el sandbox anterior muestra un error por consola:

Warning: Each child in a list should have a unique “key” prop.

Aprenderás como arreglar este error más adelante en esta página. Antes de que 
lleguemos a eso, vamos a añadir algo de estructura a tus datos.


Estos datos pueden ser estructurados incluso más.

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

// Digamos que quieres una manera de mostrar solo las personas cuya 
// profesión sea 'mathematician'. 
// Podemos usar el metodo filer() de JS para devolver solo esas personas
// ser haria de la siguiente manera

const matematicos = people.filer(persona => {
    persona.profession === 'mathematician'
}

// Ahora mapiemos sobre los matematicos

const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>

// Porultimo ponermos la variable en el componenete


 return <ul>{listItems}</ul>;


Buscar el key ejemplos en 

https://beta.es.reactjs.org/learn/rendering-lists










