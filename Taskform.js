import { useState } from "react";
import { addTask, updateTask } from "../api";

const TaskForm = ({ task, fetchTasks }) => {
  const [form, setForm] = useState(task || { title: "", description: "", dueDate: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    task ? await updateTask(task._id, form) : await addTask(form);
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
      <button type="submit">{task ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
