 

import React from 'react';
import { Link } from 'react-router-dom';
import Sales from '../components/Sales';
import Purchases from '../components/Purchase';
import Stock from '../components/Stock';
import Finance from '../components/Finance';
import Customers from '../components/Customers';
import Suppliers from '../components/Suppliers';
import UsersRoles from '../components/UsersRoles';
import Reports from '../components/Reports';
import Settings from '../components/Settings';
import Navbar from '../components/Navbar';



const ExpireMed = () => {
    return (
        <>
        {/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a href="index" className="app-brand-link">
          <span className="app-brand-logo demo">
           <i class="fa-solid fa-tablets fs-1"></i>
          </span>
          <span className="app-brand-text demo menu-text fw-bolder text-uppercase ms-2"><Link to="/">Pharma</Link></span>
        </a>
        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item active">
          <a href="" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics"><Link to="/">Dashboard</Link></div>
          </a>
        </li>

        {/* <DropdownMenu/> */}
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
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i className="bx bx-menu bx-sm" />
          </a>
        </div>
         {/* navbar of admin and search bar */}
      <Navbar/>
      </nav>
      {/* / Navbar */}


{/* ================================================ */}
{/* ================================================ */}
{/* ================================================ */}


      {/* Main Content  here */}
      <div className='mt-4'>
        {/* Main Content Starts here */} 

        <div className="container mt-2">
  <div className="card shadow-lg p-4">
    <h4 className="mb-4 text-danger">☠️ Expired Medicines</h4>

    {/* Search & Filter */}
    <div className="row mb-3">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search by medicine or category..."
        />
      </div>
      <div className="col-md-6 text-end">
        <button className="btn btn-secondary">Export to Excel</button>
      </div>
    </div>

    {/* Table */}
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-danger">
          <tr>
            <th>#</th>
            <th>Medicine</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Unit Price (৳)</th>
            <th>Expiry Date</th>
            <th>Supplier</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data Row */}
          <tr>
            <td>1</td>
            <td>Vitamin C 500mg</td>
            <td>Tablet</td>
            <td>50</td>
            <td>৳5</td>
            <td className="text-danger fw-bold">2024-08-15</td>
            <td>ABC Pharma</td>
            <td><span className="badge bg-danger">Expired</span></td>
            <td>
              <button className="btn btn-sm btn-danger me-2">Remove</button>
              <button className="btn btn-sm btn-warning">Report</button>
            </td>
          </tr>

          {/* More rows dynamically */}
        </tbody>
      </table>
    </div>
  </div>
</div>

        


        {/* Main Content  here */}
      </div>
      {/* Main Content ends here */}





    </div>
    
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
</div>
        




           
 
        </>
    );
};

export default ExpireMed;