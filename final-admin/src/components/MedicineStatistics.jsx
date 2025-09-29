import React from "react";

const MedicineStatistics = () => {
  const preventDefault = (e) => e.preventDefault();

  return (
    <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between pb-0">
          <div className="card-title mb-0">
            <h5 className="m-0 me-2">Medicine Statistics</h5>
            <small className="text-muted">15.3k Total Medicines</small>
          </div>
          <div className="dropdown">
            <button
              className="btn p-0"
              type="button"
              id="medicineStatistics"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-dots-vertical-rounded" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="medicineStatistics"
            >
              <a className="dropdown-item" href="#" onClick={preventDefault}>
                Select All
              </a>
              <a className="dropdown-item" href="#" onClick={preventDefault}>
                Refresh
              </a>
              <a className="dropdown-item" href="#" onClick={preventDefault}>
                Export
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <h2 className="mb-2">1,530</h2>
              <span>Total Medicines</span>
            </div>
            <div id="medicineStatisticsChart" />
          </div>
          <ul className="p-0 m-0">
            <li className="d-flex mb-4 pb-1">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-primary">
                  <i className="bx bx-pills" />
                </span>
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Antibiotics</h6>
                  <small className="text-muted">Amoxicillin, Ciprofloxacin</small>
                </div>
                <div className="user-progress">
                  <small className="fw-semibold">520</small>
                </div>
              </div>
            </li>

            <li className="d-flex mb-4 pb-1">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-success">
                  <i className="bx bx-medical" />
                </span>
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Painkillers</h6>
                  <small className="text-muted">Paracetamol, Ibuprofen</small>
                </div>
                <div className="user-progress">
                  <small className="fw-semibold">430</small>
                </div>
              </div>
            </li>

            <li className="d-flex mb-4 pb-1">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-info">
                  <i className="bx bx-droplet" />
                </span>
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Vitamins</h6>
                  <small className="text-muted">Vitamin C, Vitamin D</small>
                </div>
                <div className="user-progress">
                  <small className="fw-semibold">360</small>
                </div>
              </div>
            </li>

            <li className="d-flex">
              <div className="avatar flex-shrink-0 me-3">
                <span className="avatar-initial rounded bg-label-secondary">
                  <i className="bx bx-heart" />
                </span>
              </div>
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="mb-0">Supplements</h6>
                  <small className="text-muted">Protein, Fish Oil</small>
                </div>
                <div className="user-progress">
                  <small className="fw-semibold">220</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MedicineStatistics;
