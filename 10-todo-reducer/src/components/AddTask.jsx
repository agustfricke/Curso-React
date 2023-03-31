import { useState } from "react"

const AddTask = ({ onAddTask }) => {

  const [text, setText] = useState('')

  return (
    <div>
      <input 
      placeholder="Add Task"
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        onAddTask(text)
        setText('')
      }}>
      Add
      </button>
    </div>
  )
}

export default AddTask
