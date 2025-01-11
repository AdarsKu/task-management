import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import TaskManagement from "./components/TaskManagement";
import AddUserPage from "./components/AddUserPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/tasks"
          element={<TaskManagement />}
        />
        <Route
          path="/add-user"
          element={<AddUserPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
