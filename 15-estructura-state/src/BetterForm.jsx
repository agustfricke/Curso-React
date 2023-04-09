import { useState } from "react"

const BetterForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const fullName = `${firstName} ${lastName}`


  return (
    <div>
        <input type="text" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}/>
        <p>El nombre completo es: {fullName}</p>
    </div>
  )
}

export default BetterForm