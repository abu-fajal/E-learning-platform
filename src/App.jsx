// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// User Pages
import HomePage from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard/UserDashboard";
import CourseListingPage from "./components/CourseListing/CourseListingPage";
import CourseDetailsPage from "./components/CourseDetails/CourseDetailsPage";
import InstructorsPage from "./components/Instructors/InstructorsPage";
import InstructorProfilePage from "./pages/InstructorProfilePage";
import PricingPage from "./pages/PricingPage";
import UserDashboard from './components/Dashboard/UserDashboard'; 
 
// Admin Pages
import AdminLogin from "./components/Admin/Login";
import AdminSignup from "./components/Admin/Signup";
import AdminDashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Routes>
      {/* User Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/userdashboard" element={<Dashboard />} />
      <Route path="/instructors" element={<InstructorsPage />} />
      <Route path="/instructor/:id" element={<InstructorProfilePage />} />
      <Route path="/courses" element={<CourseListingPage />} />
      <Route path="/courses/:id" element={<CourseDetailsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/UserDashboard/*" element={<UserDashboard />} />


      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminSignup />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
