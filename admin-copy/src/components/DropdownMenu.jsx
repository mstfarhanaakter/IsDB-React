import React, { useState } from 'react';
// import '../components/'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-layout" />
        <div data-i18n="Layouts">Layouts</div>
      </a>
      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="layouts-without-menu.html" className="menu-link">
              <div data-i18n="Without menu">Without menu</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-without-navbar.html" className="menu-link">
              <div data-i18n="Without navbar">Without navbar</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-container.html" className="menu-link">
              <div data-i18n="Container">Container</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-fluid.html" className="menu-link">
              <div data-i18n="Fluid">Fluid</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-blank.html" className="menu-link">
              <div data-i18n="Blank">Blank</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
