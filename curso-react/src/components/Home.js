import React from 'react'

const Home = () => {


  function Random () {
    let maxNum = 50;
    let randomNumber = Math.floor((Math.random() * maxNum) + 1 );
    return randomNumber;
  }

  return (
    <div>Numero aleatorio {Random()}</div>
  )
}

export default Home