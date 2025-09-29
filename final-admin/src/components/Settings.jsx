import React, { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-cog" />
        <div data-i18n="Settings">Settings</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/pharmacy-profile" className="menu-link">
              <div data-i18n="Pharmacy Profile">Pharmacy Profile</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/notification-settings" className="menu-link">
              <div data-i18n="Notification Settings">Notification Settings</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/backup-restore" className="menu-link">
              <div data-i18n="Backup & Restore">Backup & Restore</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Settings;
