import React from 'react';

const ManageTour = () => {
    return (
        <div>
            <div className="container mt-4">
  <div className="card shadow-lg p-4">
    <h4 className="mb-4">🎒 Manage Tours</h4>

    <table className="table table-hover align-middle">
      <thead className="table-light">
        <tr>
          <th>#</th>
          <th>Tour Name</th>
          <th>Destination</th>
          <th>Duration (Days)</th>
          <th>Price (৳)</th>
          <th>Tour Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mountain Adventure</td>
          <td>Himalayas</td>
          <td>10</td>
          <td>45000</td>
          <td>Adventure</td>
          <td>
            <button className="btn btn-sm btn-primary me-2">Edit</button>
            <button className="btn btn-sm btn-danger me-2">Delete</button>
            <button className="btn btn-sm btn-info">Details</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cultural Expedition</td>
          <td>Kyoto</td>
          <td>7</td>
          <td>35000</td>
          <td>Cultural</td>
          <td>
            <button className="btn btn-sm btn-primary me-2">Edit</button>
            <button className="btn btn-sm btn-danger me-2">Delete</button>
            <button className="btn btn-sm btn-info">Details</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Wildlife Safari</td>
          <td>Kenya</td>
          <td>5</td>
          <td>28000</td>
          <td>Wildlife</td>
          <td>
            <button className="btn btn-sm btn-primary me-2">Edit</button>
            <button className="btn btn-sm btn-danger me-2">Delete</button>
            <button className="btn btn-sm btn-info">Details</button>
          </td>
        </tr>
      </tbody>
    </table>

    {/* Pagination (static example) */}
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

export default ManageTour;