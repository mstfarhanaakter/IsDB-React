import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Sales from './Sales';
import Purchases from './Purchase';
import Stock from './Stock';
import Finance from './Finance';
import Customers from './Customers';
import Suppliers from './Suppliers';
import UsersRoles from './UsersRoles';
import Reports from './Reports';
import Settings from './Settings';

const Layout = () => {
  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Sidebar Menu */}
          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
              <Link to="/" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <i className="fa-solid fa-tablets fs-1"></i>
                </span>
                <span className="app-brand-text demo menu-text fw-bolder text-uppercase ms-2">Pharma</span>
              </Link>
              <a
                href="#"
                className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i className="bx bx-chevron-left bx-sm align-middle" />
              </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
              {/* Dashboard */}
              <li className="menu-item active">
                <Link to="/" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle" />
                  <div>Dashboard</div>
                </Link>
              </li>

              {/* Sidebar Dropdowns */}
              <Sales/>
              <Purchases/>
              <Stock/>
              <Finance/>
              <Customers/>
              <Suppliers/>
              <UsersRoles/>
              <Reports/>
              <Settings/>

            </ul>
          </aside>
          {/* / Sidebar Menu */}

          {/* Layout container */}
          <div className="layout-page">
            {/* Navbar */}
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="#">
                  <i className="bx bx-menu bx-sm" />
                </a>
              </div>
              {/* Navbar component */}
              <Navbar />
            </nav>
            {/* / Navbar */}

            {/* Main Content */}
            <div className="ms-4 mt-4">
              {/* main container starts here */}

              {/* main container ends here */}



              {/* <Outlet /> */}
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
      </div>
      {/* / Layout wrapper */}
    </>
  );
};

export default Layout;
