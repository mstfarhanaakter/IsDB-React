import React from "react";

const Settings = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-cog" />
          <div data-i18n="Settings">Settings</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Pharmacy Profile">Pharmacy Profile</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Notification Settings">Notification Settings</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Backup & Restore">Backup & Restore</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Settings;
