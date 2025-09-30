import React from 'react';

const ManagePackage = () => {
    return (
        <div>
            <div className="container mt-4">
  <div className="card shadow-lg p-4">
    <h4 className="mb-4">📦 Manage Packages</h4>

    <table className="table table-hover align-middle">
      <thead className="table-light">
        <tr>
          <th>#</th>
          <th>Package Name</th>
          <th>Type</th>
          <th>Duration (Days)</th>
          <th>Price (৳)</th>
          <th>Availability</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Adventure Blast</td>
          <td>Adventure</td>
          <td>7</td>
          <td>25000</td>
          <td><span className="badge bg-success">Available</span></td>
          <td>
            <button className="btn btn-sm btn-primary me-2">Edit</button>
            <button className="btn btn-sm btn-danger me-2">Delete</button>
            <button className="btn btn-sm btn-info">Details</button>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Family Fun</td>
          <td>Family</td>
          <td>5</td>
          <td>18000</td>
          <td><span className="badge bg-warning text-dark">Coming Soon</span></td>
          <td>
            <button className="btn btn-sm btn-primary me-2">Edit</button>
            <button className="btn btn-sm btn-danger me-2">Delete</button>
            <button className="btn btn-sm btn-info">Details</button>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Romantic Honeymoon</td>
          <td>Honeymoon</td>
          <td>6</td>
          <td>30000</td>
          <td><span className="badge bg-danger">Not Available</span></td>
          <td>
            <button className="btn btn-sm btn-primary me-2">Edit</button>
            <button className="btn btn-sm btn-danger me-2">Delete</button>
            <button className="btn btn-sm btn-info">Details</button>
          </td>
        </tr>
      </tbody>
    </table>

    {/* Pagination (optional) */}
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mt-4">
        <li className="page-item disabled">
          <a className="page-link" href="#!" tabIndex="-1">Previous</a>
        </li>
        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
        <li className="page-item"><a className="page-link" href="#!">2</a></li>
        <li className="page-item"><a className="page-link" href="#!">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#!">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

        </div>
    );
};

export default ManagePackage;