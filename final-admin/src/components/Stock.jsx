import React, { useState } from "react";
import { Link } from "react-router-dom";

const Stock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-package" />
        <div data-i18n="Stock / Inventory">Stock</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="stock-list.html" className="menu-link">
              <div data-i18n="Stock List"><Link to="/stock-list">Stock List</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="low-stock.html" className="menu-link">
              <div data-i18n="Low Stock"><Link to="/low-stock">Low Stock</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="expired-medicines.html" className="menu-link">
              <div data-i18n="Expired Medicines"><Link to="/expire-med">Expired Medicines</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="damaged-medicines.html" className="menu-link">
              <div data-i18n="Damaged Medicines"><Link to="/damage-med">Damaged Medicines</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="add-medicine.html" className="menu-link">
              <div data-i18n="Add Medicine"><Link to="/add-med">Add Medicine</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="medicine-types.html" className="menu-link">
              <div data-i18n="Medicine Types"><Link to="/med-type">Medicine Types</Link></div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Stock;
