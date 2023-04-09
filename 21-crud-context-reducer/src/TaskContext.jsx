import { createContext, useContext, useReducer } from 'react'

// Para listar
const TaskContext = createContext(null)

// Para acciones
const TaskDispatchContext = createContext(null) // null es el valor inicial, App le da los datos reales

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext)
}

function tasksReducer(tasks, action) {

  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: false }]
    }

    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }

    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }

    default: { 
      throw Error(`Unknown action type: ${action.type}`)
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Hola test', done: false},
  { id: 1, text: 'Hoy es lunes', done: true},
]


