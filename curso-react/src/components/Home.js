import React from 'react'

const Home = () => {


  function Random () {
    let maxNum = 50;
    let randomNumber = Math.floor((Math.random() * maxNum) + 1 );
    return randomNumber;
  }

  const estilos = {
    backgroundColor: 'LightBlue'
  }

  return (
    <div style={estilos}>Numero aleatorio {Random()}
    
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    
    </div>

  )
}

export default Home