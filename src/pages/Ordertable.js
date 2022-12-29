import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Orderdata from "./Orderdata";
import Ordertbody from "./Ordertbody";
export default function Ordertable() {
  const order = Orderdata.map((item) => {
    return (
      <Ordertbody
        id={item.id}
        rname={item.rname}
        dname={item.dname}
        price={item.totalprice}
        details={"View Full details"}
      />
    );
  });

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              {/* Filter Button  */}
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0"></h5>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filters
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Filter by date
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Order id
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Distributor id
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">Order Table</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order id</th>
                            <th>Retailer name</th>
                            <th>Distributor Name</th>
                            <th>Total Price</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        {order}
                      </table>
                    </div>
                  </div>
                </div>

                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
}
