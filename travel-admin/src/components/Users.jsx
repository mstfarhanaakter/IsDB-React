import React from "react";
import { Link } from "react-router-dom";
import userImg from '../assets/assets/img/avatars/user-gear.png'

const Users = () => {
  return (
    <li className="nav-item navbar-dropdown dropdown-user dropdown">
      <a
        className="nav-link dropdown-toggle hide-arrow"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar avatar-online">
          <img
            src={userImg} // keep this in /public/assets/img/avatars/
            alt="User Avatar"
            className="w-px-40 h-auto rounded-circle"
          />
        </div>
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <div className="dropdown-item">
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <div className="avatar avatar-online">
                  <img
                    src={userImg}
                    alt="User Avatar"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <span className="fw-semibold d-block">Farhana</span>
                <small className="text-muted">Admin</small>
              </div>
            </div>
          </div>
        </li>

        <li><div className="dropdown-divider" /></li>

        <li>
          <Link to="/profile" className="dropdown-item">
            <i className="bx bx-user me-2" />
            <span className="align-middle">My Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="dropdown-item">
            <i className="bx bx-cog me-2" />
            <span className="align-middle">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/billing" className="dropdown-item">
            <span className="d-flex align-items-center align-middle">
              <i className="flex-shrink-0 bx bx-credit-card me-2" />
              <span className="flex-grow-1 align-middle">Billing</span>
              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                4
              </span>
            </span>
          </Link>
        </li>

        <li><div className="dropdown-divider" /></li>

        <li>
          <Link to="/login" className="dropdown-item">
            <i className="bx bx-power-off me-2" />
            <span className="align-middle">Log Out</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Users;
