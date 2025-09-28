import React from 'react';
import User from '../User';
import Dashboard from '../Dashboard';
import Sales from '../Sales';
import Purchases from '../Purchase';
import Stock from '../Stock';
import Finance from '../Finance';
import Customers from '../Customer';
import Suppliers from '../Suppliers';
import UsersRoles from '../UsersRoles ';
import Reports from '../Reports';
import Settings from '../Settings';
import MainContent from '../MainContent';


const Layout = () => {
  return (
   <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Sidebar */}
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <i className="fa-solid fa-capsules fs-1 "></i>
              </span>
              <span className="app-brand-text demo menu-text fw-bolder text-uppercase ms-2 letter-spacing-lg">
                Pharma
              </span>
            </a>
            <a
              href="#"
              className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
            >
              <i className="bx bx-chevron-left bx-sm align-middle" />
            </a>
          </div>

          <ul className="menu-inner py-1">

            <Dashboard />
            <Sales />
            <Purchases />
            <Stock />
            <Finance />
            <Customers />
            <Suppliers />
            <UsersRoles />
            <Reports />
            <Settings />
          </ul>
        </aside>

        {/* Main page */}
        <div className="layout-page">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="#">
                <i className="bx bx-menu bx-sm" />
              </a>
            </div>

            <div
              className="navbar-nav-right d-flex align-items-center"
              id="navbar-collapse"
            >
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0" />
                  <input
                    type="text"
                    className="form-control border-0 shadow-none"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <User />
              </ul>
            </div>
          </nav>
          {/* Main content here */}
                <MainContent></MainContent>
          
        </div>
      </div>

      <div className="layout-overlay layout-menu-toggle" />
    </div>
  );
};

export default Layout;
