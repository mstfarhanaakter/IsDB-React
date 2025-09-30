import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-support" />
        <div data-i18n="Support">Support</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/support-tickets" className="menu-link">
              <div data-i18n="Tickets">Tickets</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/submit-ticket" className="menu-link">
              <div data-i18n="Submit Ticket">Submit Ticket</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/faqs" className="menu-link">
              <div data-i18n="FAQs">FAQs</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/live-chat" className="menu-link">
              <div data-i18n="Live Chat">Live Chat</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default SupportDropdown;
