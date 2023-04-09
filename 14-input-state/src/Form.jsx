import { useState } from "react"

const Form = () => {

    const [respuesta, setRespuesta] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("idle");

    if(status === 'success') {
        return <div>Respuesta correcta</div>
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('loading')
        try {
            await suibmitForm(respuesta)
            setStatus('success')
        } catch (err) {
            setStatus('idle')
            setError(err)
        }
    }

    function suibmitForm(respuesta) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let isError = respuesta !== 'naranja'
                if (isError) {
                    reject(new Error('Repuesta incorrecta'))
                } else {
                    resolve()
                }
            }, 1500)
        })
    }

    return (
      <div>
        <h3>de que color es la naranja?</h3>

        <form onSubmit={handleSubmit}>

          <input placeholder="Respuesta..." 
          value={respuesta}
          onChange={(e) => setRespuesta(e.target.value)}
          disabled={status === 'loading'}
          />
          
          <button 
          disabled={status === 'loading' || respuesta === ''}
          >Enviar</button>

          { 
          error !== null && <p>Error : {error.message}</p>
          }
        </form>

      </div>
    );
}

export default Form