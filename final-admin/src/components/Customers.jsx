import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = e => {
    e.preventDefault(); // prevent "#" reload
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
            <Link to="/manage-customer" className="menu-link">
              <div data-i18n="Add Customer">Manage Customer</div>
            </Link>
          </li>
          {/* <li className="menu-item">
            <Link to="/customers" className="menu-link">
              <div data-i18n="Customer List">Customer List</div>
            </Link>
          </li> */}
         
        </ul>
      )}
    </li>
  );
};

export default Customers;
