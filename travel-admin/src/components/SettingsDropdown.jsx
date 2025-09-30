import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-cog" />
        <div data-i18n="Settings">Settings</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/general-settings" className="menu-link">
              <div data-i18n="General">General</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/email-settings" className="menu-link">
              <div data-i18n="Email Settings">Email Settings</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/notification-settings" className="menu-link">
              <div data-i18n="Notification Settings">Notification Settings</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/integrations" className="menu-link">
              <div data-i18n="Integrations">Integrations</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default SettingsDropdown;
