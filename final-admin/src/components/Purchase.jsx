import React, { useState } from "react";

const Purchases = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-purchase-tag" />
        <div data-i18n="Purchases">Purchases</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="new-purchase.html" className="menu-link">
              <div data-i18n="New Purchase">New Purchase</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-list.html" className="menu-link">
              <div data-i18n="Purchase List">Purchase List</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-returns.html" className="menu-link">
              <div data-i18n="Purchase Returns">Purchase Returns</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Purchases;
