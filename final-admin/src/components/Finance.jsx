import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Finance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // prevent page refresh
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-wallet" />
        <div data-i18n="Finance">Finance</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/revenue" className="menu-link">
              <div data-i18n="Revenue">Revenue</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/expense" className="menu-link">
              <div data-i18n="Expenses">Expenses</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/profit-report" className="menu-link">
              <div data-i18n="Profit Reports">Profit Reports</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Finance;
