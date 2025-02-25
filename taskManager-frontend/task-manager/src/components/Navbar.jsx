import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/tasks">Task Manager</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/add-user">Add User</Link>
        </li>
        <li>
          <Link to="/" onClick={() => alert("Logged out!")}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
