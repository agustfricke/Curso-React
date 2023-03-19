
const EventosProps = ({ onSmash, children }) => {

  return (
    <button onClick={onSmash}>
    { children }
    </button>
  )

}
export default EventosProps
