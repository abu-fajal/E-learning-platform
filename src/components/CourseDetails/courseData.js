// src/components/CourseDetails/courseData.js

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master both frontend and backend development using React, Node.js, Express, and MongoDB.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    syllabus: [
      "HTML, CSS, and JavaScript Fundamentals",
      "React Basics & Hooks",
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "Authentication and Authorization",
      "Deploying with Netlify & Render"
    ],
    instructor: {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Senior Developer with 10+ years of experience building scalable full-stack applications."
    }
  },
  {
    id: 2,
    title: "UI/UX Design Bootcamp",
    description: "Learn the principles of user experience and interface design using Figma and Adobe XD.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    syllabus: [
      "Design Thinking and UX Research",
      "Wireframing and Prototyping",
      "Figma Mastery",
      "UI Design Patterns",
      "Usability Testing",
      "Creating Portfolio Projects"
    ],
    instructor: {
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      bio: "UI/UX Designer with a background in psychology and 7+ years in SaaS product design."
    }
  },
  {
    id: 3,
    title: "Python for Data Science",
    description: "Explore data analysis, visualization, and machine learning with Python, NumPy, and Pandas.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    syllabus: [
      "Python Basics and Jupyter Notebooks",
      "NumPy and Pandas",
      "Data Cleaning and Manipulation",
      "Data Visualization with Matplotlib & Seaborn",
      "Introduction to Machine Learning",
      "Capstone Project"
    ],
    instructor: {
      name: "Dr. Rahul Verma",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      bio: "Data Scientist and Python expert with a PhD in AI and over 12 years of experience."
    }
  }
];

export default courses;
