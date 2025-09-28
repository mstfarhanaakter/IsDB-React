import React from "react";

const Purchases = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-purchase-tag" />
          <div data-i18n="Purchases">Purchases</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="New Purchase">New Purchase</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Purchase List">Purchase List</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Purchase Returns">Purchase Returns</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Purchases;
