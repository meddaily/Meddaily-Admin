import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Retailerlist() {
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
                  <div className="card">
                    <h5 className="card-header">Retailer List</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Business name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td>
                              <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                              <strong>Prabhahar</strong>
                            </td>
                            <td>Medi</td>
                            <td>
                              28, balaji street, barani nagar,vannar pettai.
                            </td>
                            <td>6380774800</td>
                            <td>
                              <div className="dropdown">
                                <Link
                                  className="dropdown-item"
                                  to="/retailerdetails"
                                >
                                  {" "}
                                  View Full Details
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
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
