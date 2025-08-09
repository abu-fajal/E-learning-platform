// src/components/CourseDetails/CourseDetailsPage.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import courses from "./courseData";
import "./CourseDetailsPage.css";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  const [enrolled, setEnrolled] = useState(false);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    if (!course) return;

    const enrolledCourseId = localStorage.getItem("enrolledCourse");
    const savedProgress = JSON.parse(localStorage.getItem("courseProgress")) || [];

    if (enrolledCourseId === String(course.id)) {
      setEnrolled(true);
      setProgress(savedProgress);
    }
  }, [course?.id]);

  useEffect(() => {
    if (course) {
      localStorage.setItem("courseProgress", JSON.stringify(progress));
    }
  }, [progress]);

  const handleEnroll = () => {
    setEnrolled(true);
    localStorage.setItem("enrolledCourse", course.id.toString());
    alert("🎉 Enrolled successfully!");
  };

  const toggleLessonComplete = (index) => {
    const newProgress = [...progress];
    if (newProgress.includes(index)) {
      setProgress(newProgress.filter((i) => i !== index));
    } else {
      newProgress.push(index);
      setProgress(newProgress);
    }
  };

  if (!course) {
    return <div className="course-details"><h2>❌ Course not found</h2></div>;
  }

  const completionRate = Math.round((progress.length / course.curriculum.length) * 100);

  return (
    <div className="course-details">
      <div className="course-header">
        <h1>{course.title}</h1>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span>🕒 {course.duration}</span>
          <span>📈 {course.difficulty}</span>
        </div>
      </div>

      <div className="video-wrapper">
        {course.videoUrl ? (
          <ReactPlayer url={course.videoUrl} controls width="100%" height="100%" />
        ) : (
          <p>🎥 No course video available</p>
        )}
      </div>

      {enrolled && (
        <div className="progress-section">
          <h3>🎯 Progress: {completionRate}%</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${completionRate}%` }} />
          </div>
        </div>
      )}

      <div className="curriculum">
        <h2>📚 Curriculum</h2>
        <ul>
          {course.curriculum.map((topic, index) => (
            <li key={index} className="curriculum-item">
              <input
                type="checkbox"
                checked={progress.includes(index)}
                onChange={() => toggleLessonComplete(index)}
                disabled={!enrolled}
              />
              <span className={progress.includes(index) ? "completed" : ""}>
                {index + 1}. {topic}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="instructor-section">
        <h2>👨‍🏫 Instructor</h2>
        <div className="instructor-card">
          {course.instructor?.image && (
            <img src={course.instructor.image} alt={course.instructor.name} />
          )}
          <div>
            <h3>{course.instructor.name}</h3>
            <p>{course.instructor.bio}</p>
          </div>
        </div>
      </div>

      <div className="enroll-section">
        <button
          className="enroll-button"
          onClick={handleEnroll}
          disabled={enrolled}
        >
          {enrolled ? "✅ Enrolled" : "🚀 Enroll Now"}
        </button>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
