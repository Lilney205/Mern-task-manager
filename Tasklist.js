import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl">Task List</h1>
      {tasks.map((task) => (
        <div key={task._id} className="border p-3 mt-2">
          <h2 className="text-lg">{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Due: {new Date(task.dueDate).toDateString()}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => deleteTask(task._id).then(fetchTasks)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
