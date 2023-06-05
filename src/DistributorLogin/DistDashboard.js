import React from "react";
import { Link } from "react-router-dom";
// import Expensesofweek from "./charts/Expensesofweek";
// import Growthchart from "./charts/Growthchart";
// import Incomechart from "./charts/Incomechart";
// import OrderStatisticsChart from "./charts/OrderStatisticsChart";
// import Profilereportchart from "./charts/Profilereportchart";
// import Totalrevenuechart from "./charts/Totalrevenuechart";
import Navbar from "../pages/Navbar";

import Sidebar from "../DistributorLogin/Sidebar";

export default function Dashbord() {
  const authToken = localStorage.getItem("authToken");
  console.log("dashboard",authToken)
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-lg-8 mb-4 order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                        <div className="col-sm-7">
                          <div className="card-body">
                            <h5 className="card-title text-primary">
                              Congratulations John! 🎉
                            </h5>
                            <p className="mb-4">
                              You have done <span className="fw-bold">72%</span>{" "}
                              more sales today. Check your new badge in your
                              profile.
                            </p>

                            <Link
                              to="javascript:;"
                              className="btn btn-sm btn-outline-primary"
                            >
                              View Badges
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm-5 text-center text-sm-left">
                          <div className="card-body pb-0 px-0 px-md-4">
                            <img
                              src="../assets/img/illustrations/man-with-laptop-light.png"
                              height="140"
                              alt="View Badge User"
                              data-app-dark-img="illustrations/man-with-laptop-dark.png"
                              data-app-light-img="illustrations/man-with-laptop-light.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
}
