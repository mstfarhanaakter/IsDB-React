import React, { useState } from "react";

const UsersRoles = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
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
            <a href="user-management.html" className="menu-link">
              <div data-i18n="User Management">User Management</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="roles-permissions.html" className="menu-link">
              <div data-i18n="Roles & Permissions">Roles & Permissions</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default UsersRoles;
