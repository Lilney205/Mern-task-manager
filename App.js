import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div>
      <TaskForm task={selectedTask} fetchTasks={() => setSelectedTask(null)} />
      <TaskList onEdit={setSelectedTask} />
    </div>
  );
}

export default App;
