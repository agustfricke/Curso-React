import { useState } from "react"

const User = () => {

  const [user, setUser] = useState({
    name: 'John',
    lastName: 'Doe',
    age: '34'
  })

  const handleName2 = () => {
    setUser(prevState => ({...prevState, name:'Agustin'}))
  }

  const handleName = () => {
    setUser({ name: "Agustin" })
  }

  return (
    <div>
      <h3>User Info</h3>
      <p>{user.name}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
      <button onClick={handleName}>Change Name</button>
      <button onClick={handleName2}>Change Name copiando el estado</button>
    </div>
  )
}

export default User
