import React, { useState } from "react";
import { Link } from "react-router-dom";

const UsersRoles = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = e => {
    e.preventDefault(); // prevent "#" reload
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-shield" />
        <div data-i18n="Users & Roles">Users & Roles</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/user-management" className="menu-link">
              <div data-i18n="User Management">User Management</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/roles-permissions" className="menu-link">
              <div data-i18n="Roles & Permissions">Roles & Permissions</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default UsersRoles;
