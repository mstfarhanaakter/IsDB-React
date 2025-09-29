import React from "react";

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      icon: "/src/assets/assets/img/icons/unicons/paypal.png",
      type: "Paypal",
      description: "Send money",
      amount: "+82.6",
      currency: "USD",
    },
    {
      id: 2,
      icon: "/src/assets/assets/img/icons/unicons/wallet.png",
      type: "Wallet",
      description: "Mac'D",
      amount: "+270.69",
      currency: "USD",
    },
    {
      id: 3,
      icon: "/src/assets/assets/img/icons/unicons/chart.png",
      type: "Transfer",
      description: "Refund",
      amount: "+637.91",
      currency: "USD",
    },
    {
      id: 4,
      icon: "/src/assets/assets/img/icons/unicons/cc-success.png",
      type: "Credit Card",
      description: "Ordered Food",
      amount: "-838.71",
      currency: "USD",
    },
    {
      id: 5,
      icon: "/src/assets/assets/img/icons/unicons/wallet.png",
      type: "Wallet",
      description: "Starbucks",
      amount: "+203.33",
      currency: "USD",
    },
    {
      id: 6,
      icon: "/src/assets/assets/img/icons/unicons/cc-warning.png",
      type: "Mastercard",
      description: "Ordered Food",
      amount: "-92.45",
      currency: "USD",
    },
  ];

  return (
    <div className="col-md-6 col-lg-4 order-2 mb-4">
      <div className="card h-100">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0 me-2">Transactions</h5>
          <div className="dropdown">
            <button
              className="btn p-0"
              type="button"
              id="transactionID"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-dots-vertical-rounded" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="transactionID"
            >
              <a className="dropdown-item" href="#!">
                Last 28 Days
              </a>
              <a className="dropdown-item" href="#!">
                Last Month
              </a>
              <a className="dropdown-item" href="#!">
                Last Year
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="p-0 m-0">
            {transactions.map(({ id, icon, type, description, amount, currency }) => (
              <li key={id} className="d-flex mb-4 pb-1">
                <div className="avatar flex-shrink-0 me-3">
                  <img src={icon} alt={type} className="rounded" />
                </div>
                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div className="me-2">
                    <small className="text-muted d-block mb-1">{type}</small>
                    <h6 className="mb-0">{description}</h6>
                  </div>
                  <div className="user-progress d-flex align-items-center gap-1">
                    <h6 className="mb-0">{amount}</h6>
                    <span className="text-muted">{currency}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
