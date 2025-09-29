import React, { useState } from 'react';

const Customers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-user" />
        <div data-i18n="Customers">Customers</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="customer-list.html" className="menu-link">
              <div data-i18n="Customer List">Customer List</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="add-customer.html" className="menu-link">
              <div data-i18n="Add Customer">Add Customer</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Customers;
