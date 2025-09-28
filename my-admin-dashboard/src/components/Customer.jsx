import React from "react";

const Customers = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-user" />
          <div data-i18n="Customers">Customers</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Customer List">Customer List</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Add Customer">Add Customer</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Customers;
