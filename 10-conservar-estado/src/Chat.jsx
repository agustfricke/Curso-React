import { useState } from "react"

const Chat = ({ contact }) => {
    const [text, setText] = useState('')

  return (
    <div>
        <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'Chat to' + contact.name} />
        <button>
            Send to {contact.email}
        </button>
    </div>
  )
}

export default Chat