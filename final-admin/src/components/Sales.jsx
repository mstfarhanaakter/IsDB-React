import React, { useState } from 'react';

const Sales = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-cart" />
        <div data-i18n="Sales">Sales</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="new-sale.html" className="menu-link">
              <div data-i18n="New Sale / Invoice">New Sale</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="sales-list.html" className="menu-link">
              <div data-i18n="Sales List">Sales List</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="sale-returns.html" className="menu-link">
              <div data-i18n="Sale Returns">Sale Returns</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Sales;
