import React from 'react';

const Roles = () => {
    return (
        <div>
            <div className="container mt-4">
  <div className="card shadow-lg p-4">
    <h4 className="mb-4">🛡️ Manage Roles & Permissions</h4>

    <div className="row">
      {/* Roles List */}
      <div className="col-md-4 border-end">
        <h5 className="mb-3">Roles</h5>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Admin
            <div>
              <button className="btn btn-sm btn-warning me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Manager
            <div>
              <button className="btn btn-sm btn-warning me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Employee
            <div>
              <button className="btn btn-sm btn-warning me-1">Edit</button>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          </li>
        </ul>
      </div>

      {/* Permissions Settings */}
      <div className="col-md-8">
        <h5 className="mb-3">Permissions for: <span className="text-primary">Admin</span></h5>

        <div className="row">
          <div className="col-md-6">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="viewDashboard" checked readOnly />
              <label className="form-check-label" htmlFor="viewDashboard">View Dashboard</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="manageUsers" checked readOnly />
              <label className="form-check-label" htmlFor="manageUsers">Manage Users</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="editProfile" checked readOnly />
              <label className="form-check-label" htmlFor="editProfile">Edit Profile</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="accessReports" readOnly />
              <label className="form-check-label" htmlFor="accessReports">Access Reports</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="manageInventory" readOnly />
              <label className="form-check-label" htmlFor="manageInventory">Manage Inventory</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="deleteRecords" readOnly />
              <label className="form-check-label" htmlFor="deleteRecords">Delete Records</label>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <button className="btn btn-primary mt-4">Save Changes</button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Roles;