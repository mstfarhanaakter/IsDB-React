import React from 'react';
import RevenueCard from './RevenueCard';
import MedicineStatistics from './MedicineStatistics';
import ExpanseOverview from './ExpanseOverview';
import Transactions from './Transaction';
import bannerImg from '../assets/assets/img/illustrations/10030671.jpg';

const Home = () => {
  return (

    <>
    {/* Content wrapper */}
<div className="content-wrapper">
  {/* Content */}
  <div className="container-xxl flex-grow-1 container-p-y">
    <div className="row">
      <div className="col-lg-8 mb-4 order-0">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title text-primary">Welcome Back, Admin! ✈️</h5>
                <p className="mb-4">
                  Your travel bookings have increased by <span className="fw-bold">72%</span> this week. Check the latest offers on your dashboard.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">Explore New Packages</a>
              </div>
            </div>
            <div className="col-sm-5 text-center text-sm-left">
              <div className="card-body pb-0 px-0 px-md-4">
                <img
                  src={bannerImg}
                  height={140}
                  alt="Travel Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 order-1">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="/src/assets/assets/img/icons/unicons/booking.png"
                      alt="Bookings"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOptBookings"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardOptBookings"
                    >
                      <a className="dropdown-item" href="#">View Details</a>
                      <a className="dropdown-item" href="#">Cancel</a>
                    </div>
                  </div>
                </div>
                <span className="fw-semibold d-block mb-1">Bookings</span>
                <h3 className="card-title mb-2">1,245</h3>
                <small className="text-success fw-semibold">
                  <i className="bx bx-up-arrow-alt" /> +15.3% this month
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="/src/assets/assets/img/icons/unicons/destination.png"
                      alt="Destinations"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOptDestinations"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardOptDestinations"
                    >
                      <a className="dropdown-item" href="#">View Details</a>
                      <a className="dropdown-item" href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <span>Destinations</span>
                <h3 className="card-title text-nowrap mb-1">34</h3>
                <small className="text-success fw-semibold">
                  <i className="bx bx-up-arrow-alt" /> +2 new added
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Revenue */}
      <RevenueCard />
      {/* /Total Revenue */}

      <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
        <div className="row">
          <div className="col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="/src/assets/assets/img/icons/unicons/payment.png"
                      alt="Payments"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOptPayments"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardOptPayments"
                    >
                      <a className="dropdown-item" href="#">View Details</a>
                      <a className="dropdown-item" href="#">Refunds</a>
                    </div>
                  </div>
                </div>
                <span className="d-block mb-1">Payments</span>
                <h3 className="card-title text-nowrap mb-2">$78,456</h3>
                <small className="text-success fw-semibold">
                  <i className="bx bx-up-arrow-alt" /> +12.7%
                </small>
              </div>
            </div>
          </div>

          <div className="col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="/src/assets/assets/img/icons/unicons/package.png"
                      alt="Packages"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOptPackages"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="cardOptPackages"
                    >
                      <a className="dropdown-item" href="#">View More</a>
                      <a className="dropdown-item" href="#">Edit</a>
                    </div>
                  </div>
                </div>
                <span className="fw-semibold d-block mb-1">Packages Sold</span>
                <h3 className="card-title mb-2">256</h3>
                <small className="text-success fw-semibold">
                  <i className="bx bx-up-arrow-alt" /> +8.9%
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                  <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                    <div className="card-title">
                      <h5 className="text-nowrap mb-2">Customer Satisfaction</h5>
                      <span className="badge bg-label-warning rounded-pill">2025</span>
                    </div>
                    <div className="mt-sm-auto">
                      <small className="text-success text-nowrap fw-semibold">
                        <i className="bx bx-chevron-up" /> 87.6%
                      </small>
                      <h3 className="mb-0">4.7 / 5.0</h3>
                    </div>
                  </div>
                  <div id="customerSatisfactionChart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      {/* Order Statistics */}
      <MedicineStatistics />
      {/* /Order Statistics */}

      {/* Expense Overview */}
      <ExpanseOverview />
      {/* /Expense Overview */}

      {/* Transactions */}
      <Transactions />
      {/* /Transactions */}
    </div>
  </div>
  {/* / Content */}

  {/* Footer */}
  <footer className="content-footer footer bg-footer-theme">
    <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
      <div className="mb-2 mb-md-0">
        © made with ❤️ by 
        <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder"> &nbsp; Farhana</a>
      </div>
      <div>{/* Optional footer links here */}</div>
    </div>
  </footer>
  {/* / Footer */}

  <div className="content-backdrop fade" />
</div>
{/* Content wrapper */}

    
    </>
   
  );
};

export default Home;
