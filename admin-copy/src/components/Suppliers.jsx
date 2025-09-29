import React, { useState } from "react";

const Suppliers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="fa-solid fa-users me-3"></i>
        <div data-i18n="Suppliers">Suppliers</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="supplier-list.html" className="menu-link">
              <div data-i18n="Supplier List">Supplier List</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="add-supplier.html" className="menu-link">
              <div data-i18n="Add Supplier">Add Supplier</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Suppliers;
