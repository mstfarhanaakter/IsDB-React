import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <a href="" className="menu-link">
              <div data-i18n="New Sale "><Link to='/newsale'>New Sale</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="" className="menu-link">
              <div data-i18n="Sales List"><Link to="/manage-sales">Manage Sales</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="sale-returns.html" className="menu-link">
              <div data-i18n="Sale Returns"><Link to="/sales-return">Sale Returns</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="sale-returns.html" className="menu-link">
              <div data-i18n="Sale Returns"><Link to="/manage-sales-return">Manage Sales Returns</Link></div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Sales;
