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



const AddMed = () => {
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
    <h4 className="mb-4">➕ Add New Medicine</h4>

    <form>
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          {/* Medicine Name */}
          <div className="mb-3">
            <label className="form-label">Medicine Name</label>
            <input type="text" className="form-control" placeholder="Enter medicine name" />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option disabled selected>-- Select Category --</option>
              <option>Tablet</option>
              <option>Syrup</option>
              <option>Capsule</option>
              <option>Injection</option>
              <option>Ointment</option>
            </select>
          </div>

          {/* Manufacturer */}
          <div className="mb-3">
            <label className="form-label">Manufacturer</label>
            <input type="text" className="form-control" placeholder="E.g. Beximco Pharma" />
          </div>

          {/* Supplier */}
          <div className="mb-3">
            <label className="form-label">Supplier</label>
            <select className="form-select">
              <option disabled selected>-- Select Supplier --</option>
              <option>ABC Distributors</option>
              <option>HealthCare Supply</option>
              <option>Local Supplier</option>
            </select>
          </div>

          {/* Purchase Price */}
          <div className="mb-3">
            <label className="form-label">Purchase Price (৳)</label>
            <input type="number" className="form-control" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6">
          {/* Selling Price */}
          <div className="mb-3">
            <label className="form-label">Selling Price (৳)</label>
            <input type="number" className="form-control" />
          </div>

          {/* Stock Quantity */}
          <div className="mb-3">
            <label className="form-label">Stock Quantity</label>
            <input type="number" className="form-control" />
          </div>

          {/* Unit */}
          <div className="mb-3">
            <label className="form-label">Unit</label>
            <select className="form-select">
              <option disabled selected>-- Select Unit --</option>
              <option>Box</option>
              <option>Strip</option>
              <option>Bottle</option>
              <option>Piece</option>
            </select>
          </div>

          {/* Expiry Date */}
          <div className="mb-3">
            <label className="form-label">Expiry Date</label>
            <input type="date" className="form-control" />
          </div>

          {/* Notes */}
          <div className="mb-3">
            <label className="form-label">Notes</label>
            <textarea className="form-control" rows="2" placeholder="Optional remarks..." />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 mt-3">
        Add Medicine
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

export default AddMed;