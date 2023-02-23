// ARRAYS EN REACT

// En nuestras apliaciones de React  casi siempre vamos a recibir datos
// en fromato JSON, que basicamente es una coleccion de datos, podemos 
// usar metodos de arrays de JavaScript para manipular un array de datos
// En este espiodio vamos a ver como usar filter y map con react para
// filtrar y transormar un array de datos y poderlo usar en nuestros 
// componentes de react.


import React from "react";

const Home = () => {

    const people = [{
        id: 0,
        username: 'Agustin',
        es_admin: true,
      }, {
          id: 1,
          username: 'Belen',
          es_admin: true,
      }, {
          id: 2,
          username: 'Carolina',
          es_admin: false,
      }];



    return (
        <div className="flex justify-center">
        <div className='mt-5'>

        </div>
        </div>
    );
};

export default Home;


// Trabajando con Arrays
import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home/>
    </div>
  );
}

// Podemos mapear todo este contendio de la siguietne manera 

import React from "react";

const Home = () => {

    const people = [{
        id: 0,
        username: 'Agustin',
        es_admin: true,
      }, {
          id: 1,
          username: 'Belen',
          es_admin: true,
      }, {
          id: 2,
          username: 'Carolina',
          es_admin: false,
      }];

    const list = people.map(user => <p className="text-white">{user.username}</p>)

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            {list}
        </div>
        </div>
    );
};

export default Home;

// Nota que tenemos un error y esto basicamente se soluciona proprcionando un id 
// a cada item de la lista 
// Esto es porque nesitamios idientificar de manera unica cada elemento del array
// Por lo general se le pone el ID ya que es un numero unico

// Digamos que queremos mostrar solo los usuarios con permisos de es_admin


import React from "react";

const Home = () => {

    const people = [{
        id: 0,
        username: 'Agustin',
        es_admin: true,
      }, {
          id: 1,
          username: 'Belen',
          es_admin: true,
      }, {
          id: 2,
          username: 'Carolina',
          es_admin: false,
      }];

    const admin = people.filter(user => user.es_admin === true)

    const list = admin.map(user => <p className="text-white">{user.username}</p>)

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            {list}
        </div>
        </div>
    );
};

export default Home;

// Las funciones flecha devuelven una expresion justo despues de 
// => asi que no debes poner el return 



const list = admin.map(user => <p className="text-white">{user.username}</p>)

// Debemos escribir el return en el caso de que pongamos unas llaves 

const list = admin.map(user => {
    return <p className="text-white">{user.username}</p>
)}




















