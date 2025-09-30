import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PackagesToursDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-briefcase" />
        <div data-i18n="Packages & Tours">Packages & Tours</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/new-package" className="menu-link">
              <div data-i18n="New Package">New Package</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-packages" className="menu-link">
              <div data-i18n="Manage Packages">Manage Packages</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/new-tour" className="menu-link">
              <div data-i18n="New Tour">New Tour</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-tours" className="menu-link">
              <div data-i18n="Manage Tours">Manage Tours</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default PackagesToursDropdown;
