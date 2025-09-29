import React, { useState } from "react";
import { Link } from "react-router-dom";

const Reports = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-bar-chart-alt-2" />
        <div data-i18n="Reports">Reports</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/sales-report" className="menu-link">
              <div data-i18n="Sales Report">Sales Report</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/purchase-report" className="menu-link">
              <div data-i18n="Purchase Report">Purchase Report</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/expense-report" className="menu-link">
              <div data-i18n="Expense Report">Expense Report</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/profit-loss-report" className="menu-link">
              <div data-i18n="Profit/Loss Report">Profit/Loss Report</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/stock-report" className="menu-link">
              <div data-i18n="Stock Report">Stock Report</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Reports;
