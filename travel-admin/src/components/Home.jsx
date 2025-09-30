import React from 'react';
import RevenueCard from './RevenueCard';
import MedicineStatistics from './MedicineStatistics';
import ExpanseOverview from './ExpanseOverview';
import Transactions from './Transaction';

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
                      <h5 className="card-title text-primary">Congratulations Farhana! 🎉</h5>
                      <p className="mb-4">
                        You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                        your profile.
                      </p>
                      <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                    </div>
                  </div>
                  <div className="col-sm-5 text-center text-sm-left">
                    <div className="card-body pb-0 px-0 px-md-4">
                      <img src="/src/assets/assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
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
                          <img src="/src/assets/assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Profit</span>
                      <h3 className="card-title mb-2">$12,628</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +72.80%</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span>Sales</span>
                      <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Total Revenue */}
            <RevenueCard/>
            {/*/ Total Revenue */}
            <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/paypal.png" alt="Credit Card" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="d-block mb-1">Payments</span>
                      <h3 className="card-title text-nowrap mb-2">$2,456</h3>
                      <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt" /> -14.82%</small>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/cc-primary.png" alt="Credit Card" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu" aria-labelledby="cardOpt1">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Transactions</span>
                      <h3 className="card-title mb-2">$14,857</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.14%</small>
                    </div>
                  </div>
                </div>
                {/* </div>
    <div class="row"> */}
                <div className="col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                        <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                          <div className="card-title">
                            <h5 className="text-nowrap mb-2">Profile Report</h5>
                            <span className="badge bg-label-warning rounded-pill">Year 2021</span>
                          </div>
                          <div className="mt-sm-auto">
                            <small className="text-success text-nowrap fw-semibold"><i className="bx bx-chevron-up" /> 68.2%</small>
                            <h3 className="mb-0">$84,686k</h3>
                          </div>
                        </div>
                        <div id="profileReportChart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Order Statistics */}
            <MedicineStatistics/>
            {/*/ Order Statistics */}
            {/* Expense Overview */}
            <ExpanseOverview/>
            {/*/ Expense Overview */}
            {/* Transactions */}
            <Transactions/>
            {/*/ Transactions */}
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
            <div>
              {/* <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
              <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
              <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
              <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="footer-link me-4">Support</a> */}
            </div>
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
