import React, { useState } from "react";

const Reports = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = e => {
    e.preventDefault();  // Prevent default anchor behavior
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
            <a href="sales-report.html" className="menu-link">
              <div data-i18n="Sales Report">Sales Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-report.html" className="menu-link">
              <div data-i18n="Purchase Report">Purchase Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="expense-report.html" className="menu-link">
              <div data-i18n="Expense Report">Expense Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="profit-loss-report.html" className="menu-link">
              <div data-i18n="Profit/Loss Report">Profit/Loss Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="stock-report.html" className="menu-link">
              <div data-i18n="Stock Report">Stock Report</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Reports;
