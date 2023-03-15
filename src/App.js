import { useState } from "react";

export default function App() {

  const[user, setUser] = useState([
    'Agustin',
    'Fricke',
   '23'
  ])

  const updateUser = () => {
    setUser(previoState => {
      return {...previoState, edad: '34'}
    })
  }

  return (
    <div>
      <p>name: {user.name}</p>
      <p>lastname: {user.lastName}</p>
      <p>edad: {user.edad}</p>
      <button
        type="button"
        onClick={updateUser}
      >Cambiar edad a 34</button>
    </div>
  );
}


