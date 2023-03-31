import { useReducer } from "react"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, dispatch] = useReducer(tasksReducer, initialState)

  function handleAddTask (text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  function handleChangeTask (task) {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  function handleDeleteTask (taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App

// Reducer
function tasksReducer(tasks, action) {

  switch (action.type) {

    case 'added' : {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          donde: false
        }
      ]
    }

    case 'changed' : {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }

    case 'deleted' : {
      return tasks.filter((t) => t.id !== action.id)
    }

    default: {
      throw Error("Unhandled action type " + action.type)
    }

  }

}


// State
let nextId = 3

export const initialState = [
  { id: 0, text: 'Hola test', completed: false },
  { id: 1, text: 'Hola test', completed: false },
  { id: 2, text: 'Hola test', completed: false },
]
