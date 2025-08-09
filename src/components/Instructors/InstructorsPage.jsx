// src/components/Instructors/InstructorsPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Akash from "../../assets/Akash.jpg";
import Abu from "../../assets/Abu.jpg";
import Ronald from "../../assets/Ronald.jpg";
import Arun from "../../assets/Arun.jpg";
import Deepak from "../../assets/Deepak.jpg";
import Vishal from "../../assets/Vishal.jpg";
import Chandresh from "../../assets/Chandresh.jpg";


import "./InstructorsPage.css";

const instructors = [
  {
    id: 1,
    name: "Dr. Akash kumar",
    domain: "Data Science",
    bio: "Expert in machine learning and AI",
   image: Akash,
  },
  {
    id: 2,
    name: "Prof. Abu fajal",
    domain: "Web Development",
    bio: "Specialist in front-end and back-end development",
    image: Abu,
  },
  {
    id: 3,
    name: "Mr. Ronald Das",
    domain: "Graphic Design",
    bio: "Creative designer with 10+ years of experience",
    image: Ronald,
  },
  {
    id: 4,
    name: "Mr. Arun Saini",
    domain: "Digital Marketing",
    bio: "Marketing strategist with proven results",
    image: Arun,
  },
  {
    id: 5,
    name: "Dr. Deepak kumar",
    domain: "Business Analytics",
    bio: "Data analyst with a focus on business insights",
    image: Deepak,
  },
  {
    id: 6,
    name: "Prof. Vishal kumar",
    domain: "Mobile App Development",
    bio: "Mobile app developer for iOS and Android",
    image: Vishal,
  },
  {
    id: 7,
    name: "Prof. Chandresh kumar",
    domain: "Mobile App Development",
    bio: "Mobile app developer for iOS and Android",
    image: Chandresh,
  },
];

export default function InstructorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="instructors-wrapper">
        <header className="instructors-header">
          <h1>Meet Our Instructors</h1>
          <p>Learn from industry experts across various domains</p>

          <input
            type="text"
            placeholder="Search instructors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filter-sort-section">
            <select><option>Teaching Domain</option></select>
            <select><option>Rating</option></select>
            <select><option>Course Count</option></select>

            <div className="sort-by">
              <span>Sort by</span>
              <button>Name</button>
              <button>Popularity</button>
              <button>Recent Additions</button>
            </div>
          </div>
        </header>

        <div className="instructors-grid">
          {filteredInstructors.map((instructor) => (
            <div key={instructor.id} className="instructor-card">
              <img src={instructor.image} alt={instructor.name} />
              <h3>{instructor.name}</h3>
              <p className="domain">{instructor.domain}</p>
              <p className="bio">{instructor.bio}</p>
              <button
                className="profile-btn"
                onClick={() => navigate(`/instructor/${instructor.id}`)}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>{"<"}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>10</button>
          <button>{">"}</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
