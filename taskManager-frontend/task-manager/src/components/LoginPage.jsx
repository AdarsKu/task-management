import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../api/api";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();
  //GET
  const fetchTasks = async (xame, pass) => {
    try {
      const data = await apiCall(`/hi/${xame}/${pass}`)
      setUser(data);
    } catch (err) {
      consolo.log(err)
    }


  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchTasks(username, password);
    console.log(user)
    if (user != null)
      if (username === user.name && password === user.pass) {

        navigate("/tasks");
      } else {
        alert("Invalid credentials");
      }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
