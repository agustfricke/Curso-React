import { useState } from "react"

const Todo = () => {

  let nextId = 3;

  const initialState = [
    {id: 0, name: 'Comprar manzanas', completed: false},
    {id: 1, name: 'Aprender useState', completed: false},
    {id: 2, name: 'Pasear al perro', completed: true}
  ]

  const [name, setName] = useState('')
  const [tasks, setTasks] = useState(initialState)

    function handleClick() {
      setTasks([...tasks, {id: nextId++, name:name, completed:false}])
      setName('')
  }

    function onToggle(id, nextCompleted) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: nextCompleted};
      } else {
        return task;
      }
    }));
  }

  return (
    <div>
      <h3>Lista de tareas</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task..."/>
      <button onClick={handleClick}>CREATE</button>
      <ul>
        {tasks.map(task => (
          <div key={task.id}>
          <li>{task.name}{task.id}</li>
          <button onClick={() => {
              setTasks(
                tasks.filter(a =>
                  a.id !== task.id
                )
              );
            }}>
              Delete
            </button>
           <input
              type="checkbox"
              checked={task.completed}
              onChange={e => {
                onToggle(
                  task.id,
                  e.target.checked,
                );
              }}
            />
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Todo
