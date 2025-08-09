// components/WhyChoose.jsx
import React from 'react';
import './WhyChoose.css';

const features = [
  {
    title: 'Industry-Recognized Certifications',
    desc: 'Earn certifications that are valued by employers and demonstrate your skills.',
    icon: '🎓',
  },
  {
    title: 'Access to Expert Mentors',
    desc: 'Connect with experienced professionals who can provide guidance and support.',
    icon: '👨‍🏫',
  },
  {
    title: 'Lifetime Access to Courses',
    desc: 'Enjoy unlimited access to course materials, allowing you to learn at your own pace.',
    icon: '📚',
  },
];

const WhyChoose = () => {
  return (
    <section className="why">
      <h2>Key Features</h2>
      <h3>Why Choose EduLearn?</h3>
      <p>
        EduLearn provides a comprehensive and engaging learning experience designed to help you
        achieve your professional goals. Our courses are developed by industry experts and cover the
        latest technologies and trends.
      </p>
      <div className="features">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="icon">{f.icon}</div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
