import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeedbackDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-message-detail" />
        <div data-i18n="Feedback">Feedback</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/submit-feedback" className="menu-link">
              <div data-i18n="Submit Feedback">Submit Feedback</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/view-feedback" className="menu-link">
              <div data-i18n="View Feedback">View Feedback</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/feedback-reports" className="menu-link">
              <div data-i18n="Feedback Reports">Feedback Reports</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default FeedbackDropdown;
