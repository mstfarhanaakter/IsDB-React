import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PromotionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-purchase-tag-alt" />
        <div data-i18n="Promotions">Promotions</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/create-promotion" className="menu-link">
              <div data-i18n="Create Promotion">Create Promotion</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-promotions" className="menu-link">
              <div data-i18n="Manage Promotions">Manage Promotions</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/promotion-reports" className="menu-link">
              <div data-i18n="Promotion Reports">Promotion Reports</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default PromotionsDropdown;
