// PROPS EN REACT

// Los componentes usan props para poder cominucarse entre ellos 
// cada componente padre puede pasar infromacion al componente hijo
// En estos ejemplos el componente padre va a ser App.js y el
// componente hijo va a ser Home.js
// Los props se parecen mucho a los atributos HTML donde podemos 
// pasar valores de JavaScript al HTML.

// Los props son infromacion que podemos pasar al tag JSX, por ejemplo
// los className, src, alt, entro otros

// Vamos a comenzar con el siguiente codigo:

// App.js
import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home  />
    </div>
  );
}

export default App;

// components/Home.js
import React from "react";

const Home = () => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p className="text-white">Username: </p>
            <img
                width={100}
                height={100}
                alt='User'
                src="https://cdn-icons-png.flaticon.com/512/2550/2550383.png"
            />
        </div>
        </div>
    );
};

export default Home;

// Para pasar los props nesesitamos hacer 2 cosas:
// 1- Pasar los props al Home desde App.js pasemos un nombre de usuario
// y un tamano para la imagen:

// App.js

import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home  user='Tech con Agust' size={100}/>
    </div>
  );
}

export default App;

// Ahora el segundo paso seria pasar estos props dentro del componente
// Home.js

// components/Home.js
import React from "react";

const Home = ({ user, size }) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p className="text-white">Username:{ user } </p>
            <img
                width={ size }
                height={ size }
                alt='User'
                src="https://cdn-icons-png.flaticon.com/512/2550/2550383.png"
            />
        </div>
        </div>
    );
};

export default Home;

// Como podemos ver tenemos los siguientes datos en el componente
// Ahora creemos depliquemos este componente pasandole diferente 
// infromacion a los props


// App.js

import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home  user='Tech con Agust' size={100}/>
      <Home  user='Agustin' size={200}/>
      <Home  user='Belen' size={50}/>
    </div>
  );
}

export default App;

// Exelente espero que ya vallas viendo el potencial de los props
//
// Tambien podemos pasar los props de la siguiente manera:


import React from "react";

const Home = (props) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p className="text-white">Username:{ props.user } </p>
            <img
                width={ props.size }
                height={ props.size }
                alt='User'
                src="https://cdn-icons-png.flaticon.com/512/2550/2550383.png"
            />
        </div>
        </div>
    );
};

export default Home;

// En este ejemplo de aqui estamos descructurando el prop en el 
// componente en vez de leerlo desde el parametro de la funcion
//

// Tambien podemos pasar valores ya definidos en el prop cuando 
// este no tiene un valor ya definido, lo podemos destructurar 
// pondiendo un igno de igual


import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home user={'Tech con Agust'} size={undefined}/>
    </div>
  );
}

export default App;


import React from "react";

const Home = ({ user, size=100 }) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p className="text-white">Username:{ user } </p>
            <img
                width={ size }
                height={ size }
                alt='User'
                src="https://cdn-icons-png.flaticon.com/512/2550/2550383.png"
            />
        </div>
        </div>
    );
};

export default Home;


// Aveces pasamos demasiados parametros y nustro codigo se puede
// volver repetitivo


import React from "react";

const Home = ({ user, size, alt, src }) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p className="text-white">Username:{ user } </p>
            <img
                width={ size }
                height={ size }
                alt={ alt }
                src={ src }
            />
        </div>
        </div>
    );
};

export default Home;

// para que nuestro codigo sea mas facil de leer lo que podemos hacer
// es usar lo que se le llama como spread syntax

import React from "react";

const Home = (props) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <img
                { ...props }
            />
        </div>
        </div>
    );
};

export default Home;


import Home from './components/Home';

function App() {

  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Home src={'https://cdn-icons-png.flaticon.com/512/5003/5003738.png'} 
        size={300} alt={'Nombre de usuario'}/>
    </div>
  );
}

export default App;


// Es comun encontrarnos cosas como:
 <div>
    <img/>
</div>

// Pero aveces queremos alojar nuestros componentes de la misma manera
// como por ejemplo algo como:

<Componente>
    <OtroComponente/>
</Componente>

// Aqui un ejemplo de como se podria usar:


import React from "react";

const Home = (props) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <img
                { ...props }
            />
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

// El compontee padre en este caso Card recive el contendio en un prop
// llamando children y luego a Home lo podemos poner dentro, basicamente
// seria como un div mas personalizado :D

// okey eso fue todo por los props, si te gusto dejame un like y 
// subribete si quieres mas contenido como este, los veo en el 
// proximo captitulo :D














