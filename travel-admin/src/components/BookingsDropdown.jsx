import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-calendar" />
        <div data-i18n="Bookings">Bookings</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <Link to="/new-booking" className="menu-link">
              <div data-i18n="New Booking">New Booking</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/manage-bookings" className="menu-link">
              <div data-i18n="Manage Bookings">Manage Bookings</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/cancelled-bookings" className="menu-link">
              <div data-i18n="Cancelled Bookings">Cancelled Bookings</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/booking-reports" className="menu-link">
              <div data-i18n="Booking Reports">Booking Reports</div>
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default BookingsDropdown;
