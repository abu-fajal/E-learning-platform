import React from "react";
import "./CourseListingPage.css";
import Navbar from "../../components/Navbar"; // ✅ Import the custom header
import Footer from "../../components/Footer";

// ✅ Course images
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/course4.jpg";
import course5 from "../../assets/course5.jpg";
import course6 from "../../assets/course6.jpg";
import course7 from "../../assets/course7.jpg";
import course8 from "../../assets/course8.jpg";

const images = [course1, course2, course3, course4, course5, course6, course7, course8];

const CourseListingPage = () => {
  const courses = images.map((img, index) => ({
    title: `Course Title ${index + 1}`,
    instructor: `Instructor ${index + 1}`,
    image: img,
  }));

  return (
    <>
      <Navbar /> {/* ✅ Inject custom mini header */}

      <div className="course-wrapper">
        <section className="course-listing">
          <header className="course-header">
            <h1>Explore Courses</h1>
            <p>Browse our extensive library of courses to find the perfect fit for your learning journey.</p>
            <input className="course-search" type="text" placeholder="Search for courses" />
          </header>

          <div className="course-filters">
            <select><option>Category</option></select>
            <select><option>Difficulty</option></select>
            <select><option>Rating</option></select>
            <select><option>Duration</option></select>
          </div>
          <div className="course-wrapper" style={{ paddingTop: "100px" }}>
            </div>


          <div className="course-tabs">
            <button className="active-tab">Newest</button>
            <button>Popularity</button>
            <button>Price</button>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer /> {/* ✅ Inject custom mini header */}
    </>
  );
};

export default CourseListingPage;
