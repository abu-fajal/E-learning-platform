import React from 'react';
import Navbar from '../components/Navbar';
import ExploreCourses from '../components/ExploreCourses';
import FilterBar from '../components/FilterBar';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';

import './Courses.css';

const sampleCourses = [
  {
    title: "Introduction to Data Science",
    instructor: "Dr. Emily Carter",
    image: "/images/course1.jpg"
  },
  {
    title: "Advanced Machine Learning",
    instructor: "Prof. David Lee",
    image: "/images/course2.jpg"
  },
  {
    title: "Web Development with React",
    instructor: "Mr. Alex Turner",
    image: "/assets/course3.jpg"
  },
  // Add more...
];

const Courses = () => {
  return (
    <>
      <Navbar />
      <ExploreCourses />
      <FilterBar />
      <div className="course-grid">
        {sampleCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Courses;
