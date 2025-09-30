import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UsersRolesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-user" />
        <div data-i18n="Users & Roles">Users & Roles</div>
      </a>

      {isOpen && (
       <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/users" className="menu-link">
              <div data-i18n="Users">Users</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/roles" className="menu-link">
              <div data-i18n="Roles">Roles</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/permissions" className="menu-link">
              <div data-i18n="Permissions">Permissions</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default UsersRolesDropdown;
