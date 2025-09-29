import React, { useState } from "react";
import { Link } from "react-router-dom";

const Suppliers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="fa-solid fa-users me-3"></i>
        <div data-i18n="Suppliers">Suppliers</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/manage-suppliers" className="menu-link">
              <div data-i18n="Supplier List"> Manage Supplier</div>
            </Link>
          </li>
          {/* <li className="menu-item">
            <Link to="/add-supplier" className="menu-link">
              <div data-i18n="Add Supplier">Add Supplier</div>
            </Link>
          </li> */}
        </ul>
      )}
    </li>
  );
};

export default Suppliers;
