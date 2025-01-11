import React, { useState } from "react";
import './AddUserPage.css'

const AddUserPage = () => {
  const [newUser, setNewUser] = useState({ username: "", email: "", role: "User" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User ${newUser.username} added successfully!`);
    setNewUser({ username: "", email: "", role: "User" });
  };

  return (
    <div className="add-user-page">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
