import { useState } from "react"

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)

  let taskContent;

  if(isEditing) {
    taskContent = (
      <>
        <input
        value={task.text}
        onChange={(e) => onChange({ ...task, text: e.target.value })}/>
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
    <input
    type="checkbox"
    checked={task.done}
    onChange={(e) => onChange({ ...task, done: e.target.checked })}/>
    {taskContent}
    <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  )
}









