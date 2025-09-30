import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevents unwanted page reload
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-cart" />
        <div data-i18n="Sales">Sales</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/newsale" className="menu-link">
              <div data-i18n="New Sale">New Sale</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-sales" className="menu-link">
              <div data-i18n="Sales List">Manage Sales</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/sales-return" className="menu-link">
              <div data-i18n="Sale Returns">Sale Returns</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-sales-return" className="menu-link">
              <div data-i18n="Manage Sale Returns">Manage Sales Returns</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownSample;
