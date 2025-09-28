import React from "react";

const UsersRoles = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-shield" />
          <div data-i18n="Users & Roles">Users & Roles</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="User Management">User Management</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Roles & Permissions">Roles & Permissions</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default UsersRoles;
