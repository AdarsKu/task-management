import React, { useEffect, useState } from "react";
import './Taskmanagement.css'
import TaskForm from "./TaskForm";

import { apiCall } from '../api/api';


const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  ////GET
  const fetchTasks = async () => {
    try {
      const task = await apiCall("/tasks", "GET");
      setTasks(task)
      console.log(task)
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleEditTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-management">
      <h2>Task Management</h2>
      <TaskForm
        onSubmit={editingTask ? handleEditTask : handleAddTask}
        editingTask={editingTask}
      />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.title + " " + task.name}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => setEditingTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManagement;







///POST
const addTask = async (task) => {
  try {
    const newTask = await apiCall("/tasks", "POST", task);
    console.log("Task added:", newTask);
  } catch (error) {
    console.error("Error adding task:", error.message);
  }
};

// addTask({
//   title: "New Task",
//   description: "A new task description",
//   status: "Open",
// });

/////PUT
const updateTask = async (taskId, updatedData) => {
  try {
    const updatedTask = await apiCall(`/tasks/${taskId}`, "PUT", updatedData);
    console.log("Task updated:", updatedTask);
  } catch (error) {
    console.error("Error updating task:", error.message);
  }
};

//updateTask(1, { status: "Completed" });

//////DELETE
const deleteTask = async (taskId) => {
  try {
    await apiCall(`/tasks/${taskId}`, "DELETE");
    console.log("Task deleted:", taskId);
  } catch (error) {
    console.error("Error deleting task:", error.message);
  }
};

// deleteTask(1);
