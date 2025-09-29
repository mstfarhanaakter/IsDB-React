import React, { useState } from "react";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = e => {
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
            <a href="pharmacy-profile.html" className="menu-link">
              <div data-i18n="Pharmacy Profile">Pharmacy Profile</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="notification-settings.html" className="menu-link">
              <div data-i18n="Notification Settings">Notification Settings</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="backup-restore.html" className="menu-link">
              <div data-i18n="Backup & Restore">Backup & Restore</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Settings;
