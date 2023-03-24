// Lo que pasa aqui es que el estado de la aplicacion es muy complejo, y es dificil de entender
// ya que tenemos isSent, isSending y error y se vuevlven muy dificiles de entender
// ya que facilmente podriamos tener una contradiccion entre los estados de la aplicacion
// y hay una mejor manera de hacerlo, asi que creemos un nuevo componente
import { useState } from 'react';

const FormFailed = () => {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  if (isSent) {
    return <h1>That's right!</h1>
  } else if (isSending) {
    return <h1>Loading...</h1>
  } else if (error !== '') {
    return <h1>Error: {error}</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    try {
      await submitAsyncForm(answer);
      setIsSent(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSending(false);
    }
   
  function submitAsyncForm(answer) {
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
    <div>
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
    </div>
  )
export default FormFailed
