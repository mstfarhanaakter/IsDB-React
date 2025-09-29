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



const Newsale = () => {
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
    <h4 className="mb-4">New Medicine Sale</h4>
    <form>
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          {/* Customer Name */}
          <div className="mb-3">
            <label className="form-label">Customer Name</label>
            <input type="text" className="form-control" placeholder="Enter customer name" />
          </div>

          {/* Medicine Name */}
          <div className="mb-3">
            <label className="form-label">Medicine</label>
            <select className="form-select">
              <option disabled selected>-- Select Medicine --</option>
              <option>Paracetamol 500mg</option>
              <option>Amoxicillin 250mg</option>
              <option>Cough Syrup</option>
              <option>Vitamin C</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input type="number" className="form-control" placeholder="Enter quantity" />
          </div>

          {/* Unit Price */}
          <div className="mb-3">
            <label className="form-label">Unit Price (৳)</label>
            <input type="number" className="form-control" placeholder="Enter price per unit" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6">
          {/* Total Price */}
          <div className="mb-3">
            <label className="form-label">Total Price (৳)</label>
            <input type="number" className="form-control" placeholder="Auto calculated" />
          </div>

          {/* Sale Date */}
          <div className="mb-3">
            <label className="form-label">Sale Date</label>
            <input type="date" className="form-control" />
          </div>

          {/* Payment Method */}
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select className="form-select">
              <option disabled selected>-- Select Payment --</option>
              <option>Cash</option>
              <option>Card</option>
              <option>Mobile Banking</option>
            </select>
          </div>

          {/* Notes */}
          <div className="mb-3">
            <label className="form-label">Notes</label>
            <textarea className="form-control" rows={3} placeholder="Enter any remarks" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 mt-3">
        Confirm Sale
      </button>
    </form>
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

export default Newsale;