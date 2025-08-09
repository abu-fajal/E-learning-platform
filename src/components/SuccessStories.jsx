import React from 'react';
import './SuccessStories.css';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';

const reviews = [
  {
    name: 'Akash Kumar',
    time: '2 months ago',
    stars: 5,
    text: 'EduLearn’s web development course was a game-changer for me...',
    likes: 15,
    comments: 2,
    avatar: avatar1,
  },
  {
    name: 'Abu fajal',
    time: '3 months ago',
    stars: 5,
    text: 'The data science masterclass exceeded my expectations...',
    likes: 20,
    comments: 1,
    avatar: avatar2,
  },
];

const SuccessStories = () => {
  return (
    <section className="reviews">
      <h2>Student Success Stories</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <img src={review.avatar} alt={review.name} />
            <div>
              <h4>{review.name}</h4>
              <span>{review.time}</span>
            </div>
          </div>
          <div className="stars">★★★★★</div>
          <p>{review.text}</p>
          <div className="review-footer">
            <span>👍 {review.likes}</span>
            <span>💬 {review.comments}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SuccessStories;
