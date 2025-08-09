import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from '../../components/Sidebar';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCourses: 0,
    activeUsers: 0,
    revenue: 0,
  });

  // Fetch dynamic dashboard data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/stats'); // Replace with your actual API
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch admin stats:', error);
      }
    };

    fetchStats();
  }, []);

  // Chart dummy data (can also be fetched dynamically later)
  const userEngagementData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'User Engagement',
        data: [20, 30, 25, 40],
        borderColor: '#333',
        backgroundColor: '#ccc',
        tension: 0.4,
      },
    ],
  };

  const courseEnrollmentData = {
    labels: ['Course A', 'Course B', 'Course C', 'Course D'],
    datasets: [
      {
        label: 'Enrollment',
        data: [90, 20, 10, 30],
        backgroundColor: ['#333', '#bbb', '#ccc', '#ddd'],
      },
    ],
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-dashboard">
        <div className="dashboard-header">
          <h2>Dashboard Overview</h2>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <p>Total Courses</p>
            <h3>{stats.totalCourses}</h3>
          </div>
          <div className="card">
            <p>Active Users</p>
            <h3>{stats.activeUsers}</h3>
          </div>
          <div className="card">
            <p>Revenue</p>
            <h3>${stats.revenue}</h3>
          </div>
        </div>

        <div className="dashboard-charts">
          <div className="chart-card">
            <h4>User Engagement</h4>
            <p className="chart-subtext">+15% <span className="green-text">Last 30 Days</span></p>
            <Line data={userEngagementData} />
          </div>

          <div className="chart-card">
            <h4>Course Enrollment</h4>
            <p className="chart-subtext">+10% <span className="green-text">Last 30 Days</span></p>
            <Bar data={courseEnrollmentData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
