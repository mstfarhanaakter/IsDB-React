import React from 'react';

const NewPackage = () => {
    return (
        <div>
           <div className="container mt-4">
  <div className="card shadow-lg p-4">
    <h4 className="mb-4">➕ Add New Package</h4>

    <form>
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-md-6">
          {/* Package Name */}
          <div className="mb-3">
            <label className="form-label">Package Name</label>
            <input type="text" className="form-control" placeholder="Enter package name" />
          </div>

          {/* Package Type */}
          <div className="mb-3">
            <label className="form-label">Package Type</label>
            <select className="form-select">
              <option disabled selected>-- Select Type --</option>
              <option>Adventure</option>
              <option>Family</option>
              <option>Honeymoon</option>
              <option>Corporate</option>
              <option>Cultural</option>
            </select>
          </div>

          {/* Duration */}
          <div className="mb-3">
            <label className="form-label">Duration (Days)</label>
            <input type="number" className="form-control" placeholder="E.g. 5" />
          </div>

          {/* Location */}
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" placeholder="Enter destination or region" />
          </div>

          {/* Start Date */}
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input type="date" className="form-control" />
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
            <input type="number" className="form-control" placeholder="E.g. 15000" />
          </div>

          {/* Availability */}
          <div className="mb-3">
            <label className="form-label">Availability</label>
            <select className="form-select">
              <option disabled selected>-- Select Availability --</option>
              <option>Available</option>
              <option>Not Available</option>
              <option>Coming Soon</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" className="form-control" />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="3" placeholder="Write brief details about the package..." />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-success w-100 mt-3">
        Add Package
      </button>
    </form>
  </div>
</div>
 
        </div>
    );
};

export default NewPackage;