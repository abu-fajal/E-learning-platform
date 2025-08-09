import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <input type="text" placeholder="Search for courses" className="course-search" />
      <div className="filter-buttons">
        <button>Category ⌄</button>
        <button>Difficulty ⌄</button>
        <button>Rating ⌄</button>
        <button>Duration ⌄</button>
      </div>
      <div className="sort-tabs">
        <span className="active">Newest</span>
        <span>Popularity</span>
        <span>Price</span>
      </div>
    </div>
  );
};

export default FilterBar;
