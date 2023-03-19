
const Propagacion = ({ onSmash, children }) => {

    {/* <button onClick={onSmash}> */}
    {/* { children } */}
    {/* </button> */}

  return (
    <button onClick={e => {
      e.stopPropagation();
      onSmash();
    }}>
      {children}
    </button>
  )

}
export default Propagacion
