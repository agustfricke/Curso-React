import { useReducer } from "react"
import TasksReducer from "./TasksReducer"
import AddTask from "./AddTask"
import TaskList from "./TaskList"


function App() {

  const [tasks, dispatch] = useReducer(TasksReducer, initialTasks)

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }

  return (
    <>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList 
      tasks={tasks}
      onChangeTask={handleChangeTask}
      onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

export default App

let nextId = 3
const initialTasks = [
  {id: 0, text: 'Task num 1', done: false},
  {id: 1, text: 'Task 2', done: true},
  {id: 2, text: 'Hola como estas', done: false}
]
