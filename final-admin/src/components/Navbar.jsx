import React from 'react';
import Users from './Users';

const Navbar = () => {
    return (
        <>
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0" />
              <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
            </div>
          </div>
          {/* /Search */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Place this tag where you want the button to render. */}
           
            {/* User */}
            <Users/>
            {/*/ User */}
          </ul>
        </div>
        
        
        </>
    );
};

export default Navbar;