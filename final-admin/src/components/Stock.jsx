import React, { useState } from "react";
import { Link } from "react-router-dom";

const Stock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-package" />
        <div data-i18n="Stock / Inventory">Stock</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/stock-list" className="menu-link">
              <div data-i18n="Stock List">Stock List</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/low-stock" className="menu-link">
              <div data-i18n="Low Stock">Low Stock</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/expire-med" className="menu-link">
              <div data-i18n="Expired Medicines">Expired Medicines</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/damage-med" className="menu-link">
              <div data-i18n="Damaged Medicines">Damaged Medicines</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/add-med" className="menu-link">
              <div data-i18n="Add Medicine">Add Medicine</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/med-type" className="menu-link">
              <div data-i18n="Medicine Types">Medicine Types</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Stock;
