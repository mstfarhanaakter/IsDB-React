import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AnalyticsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-bar-chart-alt-2" />
        <div data-i18n="Analytics">Analytics</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/dashboard-overview" className="menu-link">
              <div data-i18n="Dashboard Overview">Dashboard Overview</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/user-analytics" className="menu-link">
              <div data-i18n="User Analytics">User Analytics</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/sales-analytics" className="menu-link">
              <div data-i18n="Sales Analytics">Sales Analytics</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/traffic-sources" className="menu-link">
              <div data-i18n="Traffic Sources">Traffic Sources</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default AnalyticsDropdown;
