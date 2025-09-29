import React from "react";

const ExpanseOverview = () => {
  return (
    <div className="col-md-6 col-lg-4 order-1 mb-4">
      <div className="card h-100">
        <div className="card-header">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className="nav-link active"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#navs-tabs-line-card-income"
                aria-controls="navs-tabs-line-card-income"
                aria-selected="true"
              >
                Income
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className="nav-link"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#navs-tabs-line-card-expenses"
                aria-controls="navs-tabs-line-card-expenses"
                aria-selected="false"
              >
                Expenses
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className="nav-link"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#navs-tabs-line-card-profit"
                aria-controls="navs-tabs-line-card-profit"
                aria-selected="false"
              >
                Profit
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body px-0">
          <div className="tab-content p-0">
            {/* Income Tab */}
            <div
              className="tab-pane fade show active"
              id="navs-tabs-line-card-income"
              role="tabpanel"
              aria-labelledby="income-tab"
            >
              <div className="d-flex p-4 pt-3">
                <div className="avatar flex-shrink-0 me-3">
                  <img
                    src="/src/assets/assets/img/icons/unicons/wallet.png"
                    alt="Wallet Icon"
                  />
                </div>
                <div>
                  <small className="text-muted d-block">Total Balance</small>
                  <div className="d-flex align-items-center">
                    <h6 className="mb-0 me-1">$459.10</h6>
                    <small className="text-success fw-semibold">
                      <i className="bx bx-chevron-up" />
                      42.9%
                    </small>
                  </div>
                </div>
              </div>
              <div id="incomeChart" />
              <div className="d-flex justify-content-center pt-4 gap-2">
                <div className="flex-shrink-0">
                  <div id="expensesOfWeek" />
                </div>
                <div>
                  <p className="mb-n1 mt-1">Expenses This Week</p>
                  <small className="text-muted">$39 less than last week</small>
                </div>
              </div>
            </div>

            {/* Expenses Tab */}
            <div
              className="tab-pane fade"
              id="navs-tabs-line-card-expenses"
              role="tabpanel"
              aria-labelledby="expenses-tab"
            >
              {/* You can add expenses content here */}
              <div className="p-4">
                <p>Expenses details coming soon...</p>
              </div>
            </div>

            {/* Profit Tab */}
            <div
              className="tab-pane fade"
              id="navs-tabs-line-card-profit"
              role="tabpanel"
              aria-labelledby="profit-tab"
            >
              {/* You can add profit content here */}
              <div className="p-4">
                <p>Profit details coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpanseOverview;
