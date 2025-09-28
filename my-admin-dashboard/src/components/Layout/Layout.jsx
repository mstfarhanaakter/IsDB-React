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

const Layout = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Sidebar Menu */}
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">
              {/* Logo Placeholder */}
              <span className="app-brand-logo demo">
                <i class="fa-solid fa-capsules text-lg"></i>
              </span>
              <span className="app-brand-text demo menu-text fw-bolder text-uppercase ms-2 letter-spacing-lg">Pharma</span>
            </a>
            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle" />
            </a>
          </div>

          <ul className="menu-inner py-1">

            <Dashboard />
            
            <Sales></Sales>
            <Purchases></Purchases>
            <Stock></Stock>
            <Finance></Finance>
            <Customers></Customers>
            <Suppliers></Suppliers>
            <UsersRoles></UsersRoles>
            <Reports></Reports>
            <Settings></Settings>

            {/* <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Hello</span>
            </li> */}

          </ul>
        </aside>

        {/* Main Layout Page */}
        <div className="layout-page">
          {/* Navbar */}
          <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm" />
              </a>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              {/* Search Box */}
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="bx bx-search fs-4 lh-0" />
                  <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                </div>
              </div>

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                

                {/* User Profile */}
                <User />
              </ul>
            </div>
          </nav>

          {/* এখানে মূল কন্টেন্ট/পেজ কন্টেন্ট অ্যাড করবে */}
        </div>
      </div>

      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle" />
    </div>
  );
};

export default Layout;
