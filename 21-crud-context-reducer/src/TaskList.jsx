import { useState } from "react"
import { useTasks, useTasksDispatch } from "./TaskContext"

const TaskList = () => {

  const tasks = useTasks()

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
          <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList

function Task({ task }) {
   
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useTasksDispatch()

  let taskContent;

  if(isEditing) {
    taskContent = (
      <>
        <input value={task.text}
        onChange={(e) => {
          dispatch({ type: 'changed', task: { ...task, text: e.target.value }})
        }}
        />

        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    )
  } else {
    taskContent = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    )
  }

  return (
    <>
    <input type="checkbox" checked={task.done} 
    onChange={(e) => {
      dispatch({ type: 'changed', task: { ...task, done: e.target.checked }})
    }}
    />
    {taskContent}
    <button onClick={() => { dispatch ({ type: 'deleted', id: task.id})}}>
      Delete
    </button>
    </>
  )
}
