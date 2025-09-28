import React from "react";

const Reports = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-bar-chart-alt-2" />
          <div data-i18n="Reports">Reports</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Sales Report">Sales Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Purchase Report">Purchase Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Expense Report">Expense Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Profit/Loss Report">Profit/Loss Report</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Stock Report">Stock Report</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Reports;
