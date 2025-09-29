import React, { useState } from "react";

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
              <div data-i18n="Stock List">Stock List</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="low-stock.html" className="menu-link">
              <div data-i18n="Low Stock">Low Stock</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="expired-medicines.html" className="menu-link">
              <div data-i18n="Expired Medicines">Expired Medicines</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="damaged-medicines.html" className="menu-link">
              <div data-i18n="Damaged Medicines">Damaged Medicines</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="add-medicine.html" className="menu-link">
              <div data-i18n="Add Medicine">Add Medicine</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="medicine-types.html" className="menu-link">
              <div data-i18n="Medicine Types">Medicine Types</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Stock;
