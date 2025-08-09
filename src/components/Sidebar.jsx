// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">AdminPanel</h2>
      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" activeclassname="active">Dashboard</NavLink>
        <NavLink to="/admin/courses" activeclassname="active">Courses</NavLink>
        <NavLink to="/admin/users" activeclassname="active">Users</NavLink>
        <NavLink to="/admin/settings" activeclassname="active">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
