import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import UsersRolesDropdown from "./UsersRolesDropdown";
import PackagesToursDropdown from "./PackagesToursDropdown";
import BookingsDropdown from "./BookingsDropdown";
import TransportStayDropdown from "./TransportStayDropdown";
import PaymentsDropdown from "./PaymentsDropdown";
import SupportDropdown from "./SupportDropdown";
import FeedbackDropdown from "./FeedbackDropdown";
import AnalyticsDropdown from "./AnalyticsDropdown ";
import SettingsDropdown from "./SettingsDropdown";

export default function LayoutCopy() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = (e) => {
    e.preventDefault();
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <aside
          id="layout-menu"
          className={`layout-menu menu-vertical menu ${isSidebarOpen ? "" : "collapsed"}`}
          style={{
            overflowY: "auto",
            height: "100vh",
            backgroundColor: "#bbd0ff",
            color: "black",
          }}
        >
          {/* Embedded styles to force sidebar text and icons white */}
          <style>{`
            #layout-menu a,
            #layout-menu a .menu-icon,
            #layout-menu a div,
            #layout-menu .menu-inner .menu-item .menu-link {
              color: black !important;
            }
            #layout-menu a:hover {
              color: #ffd700 !important; /* Optional hover color */
            }
          `}</style>

          <div className="app-brand demo">
            <Link to="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <i className="fa-solid fa-plane-departure fs-1"></i>
              </span>
              <span className="app-brand-text demo menu-text fs-4 fw-bolder text-uppercase ms-2">
                TravelZone
              </span>
            </Link>
            <a
              href="#"
              className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              onClick={toggleSidebar}
            >
              <i className="bx bx-chevron-left bx-sm align-middle" />
            </a>
          </div>

          <div className="menu-inner-shadow" />

          <ul className="menu-inner py-1">
            <li className="menu-item active">
              <Link to="/" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle" />
                <div>Dashboard</div>
              </Link>
            </li>
            {/* Your dropdowns here */}
            <UsersRolesDropdown />
            <PackagesToursDropdown />
            <BookingsDropdown />
            <TransportStayDropdown />
            <PaymentsDropdown />
            <SupportDropdown />
            <FeedbackDropdown />
            <AnalyticsDropdown />
            <SettingsDropdown />
          </ul>
        </aside>

        <div className="layout-page">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center"
            id="layout-navbar"
            style={{ backgroundColor: "#e9edc9" }}
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a
                href="#"
                className="nav-item nav-link px-0 me-xl-4"
                onClick={toggleSidebar}
              >
                <i className="bx bx-menu bx-sm" />
              </a>
            </div>
            {/* Navbar component */}
            <Navbar />
          </nav>

          <div className="ms-4 mt-4">
            {/* Main Content */}
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className="layout-overlay layout-menu-toggle"
        onClick={toggleSidebar}
      />
    </div>
  );
}
