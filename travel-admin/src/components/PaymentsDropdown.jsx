import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-credit-card" />
        <div data-i18n="Payments">Payments</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/new-payment" className="menu-link">
              <div data-i18n="New Payment">New Payment</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-payments" className="menu-link">
              <div data-i18n="Manage Payments">Manage Payments</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/payment-receipts" className="menu-link">
              <div data-i18n="Payment Receipts">Payment Receipts</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/refunds" className="menu-link">
              <div data-i18n="Refunds">Refunds</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default PaymentsDropdown;
