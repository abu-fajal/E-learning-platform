// components/FeaturedCourses.jsx
import React from 'react';
import './FeaturedCourses.css';

// ✅ Import the images from the assets folder
import course11 from '../assets/course11.jpg';
import course22 from '../assets/course22.jpg';
import course33 from '../assets/course33.jpg';


const courses = [
  {
    title: 'The Complete Web Development Bootcamp',
    desc: 'Learn to build websites and web applications from scratch.',
    image: course11,
  },
  {
    title: 'Data Science and Machine Learning Masterclass',
    desc: 'Master data analysis, machine learning algorithms, and data visualization.',
    image: course22,
  },
  {
    title: 'Data Science and Machine Learning Masterclass',
    desc: 'Master data analysis, machine learning algorithms..',
    image: course33,
  },
  
];

const FeaturedCourses = () => {
  return (
    <section className="courses">
      <h2>Featured Courses</h2>
      <div className="course-grid">
        {courses.map((course, idx) => (
          <div key={idx} className="course-card">
            <img src={course.image} alt={course.title} />
            <h4>{course.title}</h4>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
