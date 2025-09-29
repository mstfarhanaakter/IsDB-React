import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <a href="" className="menu-link">
              <div data-i18n="New Purchase"><Link to="/new-purchase">New Purchase</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="" className="menu-link">
              <div data-i18n="Purchase List"><Link to="/manage-purchase">Manage Purchase</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-returns.html" className="menu-link">
              <div data-i18n="Purchase Returns"><Link to="/purchase-return">Purchase Returns</Link></div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-returns.html" className="menu-link">
              <div data-i18n="Purchase Returns"><Link to="/manage-purchase-return"> Manage Returns</Link></div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Purchases;
