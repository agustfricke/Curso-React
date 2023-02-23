// RENDERIZADO CONDICIONAL

//  Tus componentes a menudo necesitarán mostrar diferentes 
//  cosas dependiendo de diferentes condiciones. En React, puedes 
//  renderizar JSX de forma condicional utilizando la sintaxis de 
//  JavaScript como las declaraciones if, && y los operadores ? :

// Okey vamos a comenzar con el siguiente condigo:


import Home from './components/Home';
import Card from './components/Card';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Card>
        <Home es_admin={true} username='Agustin'/>
        <Home es_admin={false} username='Belen'/>
        <Home es_admin={true} username='Martin'/>
      </Card>
    </div>
  );
}

export default App;


import React from "react";

const Home = ({ username, es_admin }) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p> { username }</p>
        </div>
        </div>
    );
};

export default Home;


import React from "react";

const Card = ({ children }) => {

    return (
        <div className="bg-gray-400 p-5">
            { children }
        </div>
    )
}
export default Card;

// En este ejemplode renderizando condiconal lo que queremos hacer es poner
// un texto verde para los usuarios que sean admin, osea que tengan 
// privilegios de administrador,y texto rojo para los que no tengan privilegios 
// de admin, 


import React from "react";

const Home = ({ username, es_admin }) => {

    if (es_admin) {
        return (
        <div className="flex justify-center">
        <div className='mt-5'>
        <p className='text-green-800'>{ username } </p>
        </div>
        </div>
        )
    }  
        return (
        <div className="flex justify-center">
        <div className='mt-5'>
        <p className='text-red-800'>{ username } </p>
        </div>
        </div>
        )
    }

};

export default Home;

// Devolucion de NULL

// En algunas situaciones no vas a querer devolver nada, por ejempolo no queremos
// devolver los usuarios que tengan permisos de administrador, un componente
// deve devolver algo y en un caso asi podemos devolver null

import React from "react";

const Home = ({ username, es_admin }) => {

    if (es_admin) {
        return null
    }  
        return (
        <div className="flex justify-center">
        <div className='mt-5'>
        <p className='text-red-800'>{ username } </p>
        </div>
        </div>
        )
    }

};

export default Home;

// A este codigo lo podemos hacer mas eficiente o DRY, que significaNo te repitas en
// ingles para eso podeos usar el condicional ternario ? :

import React from "react";

const Home = ({ username, es_admin }) => {

    return (

        <div className="flex justify-center">
        <div className='mt-5'>
        { es_admin ? 
            <p className='text-green-800'>{ username }</p>
            : 
            <p className='text-red-800'> { username }</p>
        }
        </div>
        </div>
    )
}
export default Home;

// perfeto ahora se lee mucho mejor

// tambien podemos hacer algo como para poner mas facil poner mas JSX en cada
// uno de los casos
import React from "react";

const Home = ({ username, es_admin }) => {

    return (

        <div className="flex justify-center">
        <div className='mt-5'>
        { es_admin ? ( 
            <del>
            <p className='text-green-800'>{ username }</p>
            </del>
        ) : ( 
            <p className='text-red-800'> { username }</p>
        )}
        </div>
        </div>
    )
}
export default Home;


// EL OPERADOR LOGICO AND (&&)
// Otro codicional que podemos poner es el operador logico and, 
// dentro de los componentes de react a menudo tenemos la nesesidad renderizar
// algun JSX cuando la condicion es verdadera o no renderizar nada en el caso
// de contrario, con && podemos renderizar condicionalmente solo si los
// usuarios son admin

import React from "react";

const Home = ({ username, es_admin }) => {

    return (

        <div className="flex justify-center">
        <div className='mt-5'>
        
        { es_admin && 
            <p className='text-green-800'> { username }</p>
        }

        </div>
        </div>
    )
}
export default Home;

// Asignacion condicional a una variables JSX

import React from 'react';

const Home = () => {

    let admin = username;
    if (es_admin) {
        admin = <p className='text-green-800'> { username } </p>
    }
    return (
        <div>
        { admin }
        </div>
    )
}

export default Home;







