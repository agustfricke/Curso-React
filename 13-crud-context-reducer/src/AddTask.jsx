import { useState } from "react"
import { useTasksDispatch } from "./TaskContext"

const AddTask = () => {

  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()

  let nextId = 2

  return (
    <div>
      <input placeholder="Add Task"
      value={text}
      onChange={e => setText(e.target.value)}
      />
     <button onClick={() => {setText(''); dispatch({ type: 'added', id: nextId++, text: text})}}>
        Add
      </button> 
    </div>
  )
}

export default AddTask
