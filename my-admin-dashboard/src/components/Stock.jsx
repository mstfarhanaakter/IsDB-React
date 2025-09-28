import React from "react";

const Stock = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-package" />
          <div data-i18n="Stock / Inventory">Stock</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Stock List">Stock List</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Low Stock">Low Stock</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Expired Medicines">Expired Medicines</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Damaged Medicines">Damaged Medicines</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Add Medicine">Add Medicine</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Medicine Types">Medicine Types</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Stock;
