import { useState } from 'react';

export default function Form() {
  // Definimos el estado de input (respuesta)
  const [answer, setAnswer] = useState('');
  // Ponemos el estado de error por si hay 1, comienza en null
  const [error, setError] = useState(null);
  // Ponemos el status, donde hay 3 opciones -> success, submiting, typing
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  } else if (status === 'submitting') {
    return <h1>Loading...</h1>
  } else if (error !== null) {
    return <h1>Error: {error.message}</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitAsyncForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

function submitAsyncForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer !== 'react'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

  return (
    <>
      <h2>Reaccionar al input con estado</h2>
      <p>
        En este capitulo vamos a ver como cambiar la UI en respuesta a las acciones del usuario,
        vamos a crear un fomulario donde el comonente va a tener varios estados
        1- Si el usuario escribe algo en el fromulario, el boton se va a habiliar
        2- Cuando el usuario le da submit, va a aparecer un simple Loading...
        3- Si la respuesta es correcta vamos a mostrar un mesnaje de exito
        4- Si no es la respuesta vamos a mostrar un mensaje de eror
        Todo esto con la funcion timeOut para simular que estamos mandando datos a travez de la red
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
      </form>
    </>
  );
}

