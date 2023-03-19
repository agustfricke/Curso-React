// Las variables en React no son suficientes

const Let = () => {

  let index = 0

  function handleClick () {
    index = index + 1
  }

  return (
  
    <div>
      <h3>Let</h3>
      <p>{index}</p>
      <button onClick={handleClick}>+</button>
    </div>

  )
}

export default Let
