import { TasksProvider } from "./TaskContext"
import TaskList from "./TaskList"
import AddTask from "./AddTask"

function App(){
  return (
    <TasksProvider>
      <AddTask />
     <TaskList /> 
    </TasksProvider>
  )
}
export default App
