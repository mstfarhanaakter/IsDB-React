import React, { useState } from "react";
import { Link } from "react-router-dom";

const Purchases = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-purchase-tag" />
        <div data-i18n="Purchases">Purchases</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/new-purchase" className="menu-link">
              <div data-i18n="New Purchase">New Purchase</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-purchase" className="menu-link">
              <div data-i18n="Purchase List">Manage Purchase</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/purchase-return" className="menu-link">
              <div data-i18n="Purchase Returns">Purchase Returns</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-purchase-return" className="menu-link">
              <div data-i18n="Manage Returns">Manage Returns</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Purchases;
