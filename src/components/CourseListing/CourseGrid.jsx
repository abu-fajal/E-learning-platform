import React from 'react';
import CourseCard from './CourseCard';
import course1 from '../../assets/course1.jpg'; // update with your images

const courses = [
  { title: 'Introduction to Data Science', author: 'Dr. Emily Carter', image: course1 },
  { title: 'Advanced Machine Learning', author: 'Prof. David Lee', image: course1 },
  { title: 'Web Development with React', author: 'Mr. Alex Turner', image: course1 },
  { title: 'Mobile App Development with Swift', author: 'Ms. Sophia Clark', image: course1 },
  { title: 'Digital Marketing Fundamentals', author: 'Mr. Ethan Harris', image: course1 },
  { title: 'Financial Modeling and Analysis', author: 'Dr. Olivia Bennett', image: course1 },
  { title: 'Creative Writing Workshop', author: 'Ms. Chloe Foster', image: course1 },
  { title: 'Photography Masterclass', author: 'Mr. Daniel Evans', image: course1 },
  { title: 'Project Management Essentials', author: 'Dr. Noah Green', image: course1 },
  { title: 'Business Strategy and Leadership', author: 'Prof. Isabella Hayes', image: course1 },
];

const CourseGrid = () => {
  return (
    <div className="course-grid">
      {courses.map((course, i) => (
        <CourseCard key={i} {...course} />
      ))}
    </div>
  );
};

export default CourseGrid;
