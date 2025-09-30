import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TransportStayDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-car" />
        <div data-i18n="Transport & Stay">Transport & Stay</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/add-transport" className="menu-link">
              <div data-i18n="Add Transport">Add Transport</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-transport" className="menu-link">
              <div data-i18n="Manage Transport">Manage Transport</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/add-accommodation" className="menu-link">
              <div data-i18n="Add Stay">Add Stay</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-accommodation" className="menu-link">
              <div data-i18n="Manage Stay">Manage Stay</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default TransportStayDropdown;
