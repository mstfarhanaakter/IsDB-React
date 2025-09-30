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