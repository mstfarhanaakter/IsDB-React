import React from 'react';

const NewTour = () => {
    return (
        <div>
            <div className="container mt-4">
  <div className="card shadow-lg p-4">
    <h4 className="mb-4">➕ Add New Tour</h4>

    <form>
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          {/* Tour Name */}
          <div className="mb-3">
            <label className="form-label">Tour Name</label>
            <input type="text" className="form-control" placeholder="Enter tour name" />
          </div>

          {/* Destination */}
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input type="text" className="form-control" placeholder="Enter destination" />
          </div>

          {/* Start Date */}
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-control" />
          </div>

          {/* Duration (days) */}
          <div className="mb-3">
            <label className="form-label">Duration (Days)</label>
            <input type="number" className="form-control" placeholder="E.g. 7" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-6">
          {/* End Date */}
          <div className="mb-3">
            <label className="form-label">End Date</label>
            <input type="date" className="form-control" />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (৳)</label>
            <input type="number" className="form-control" placeholder="E.g. 12000" />
          </div>

          {/* Tour Type */}
          <div className="mb-3">
            <label className="form-label">Tour Type</label>
            <select className="form-select">
              <option disabled selected>-- Select Tour Type --</option>
              <option>Adventure</option>
              <option>Cultural</option>
              <option>Leisure</option>
              <option>Wildlife</option>
              <option>Historical</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3" placeholder="Enter tour details..." />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 mt-3">
        Add Tour
      </button>
    </form>
  </div>
</div>

        </div>
    );
};

export default NewTour;