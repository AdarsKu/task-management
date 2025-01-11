import React, { useState, useEffect } from "react";
import './form.css'

const TaskForm = ({ onSubmit, editingTask }) => {
  const [task, setTask] = useState({ name: "", priority: "Low", status: "Open" });

  useEffect(() => {
    if (editingTask) setTask(editingTask);
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ name: "", priority: "Low", status: "Open" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="High">High</option>
      </select>
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button className='btn' type="submit">{editingTask ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
