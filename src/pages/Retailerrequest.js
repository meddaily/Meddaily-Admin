import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
export default function Retailerrequest() {
  const [retailerReq, setRetailerReq] = useState([]);
  useEffect(() => {
    handleRetailerReq();
  }, []);
  const handleRetailerReq = async () => {
    try {
      const response = await axios.get(
        "https://api.meddaily.in/retailer_request"
      );
      setRetailerReq(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
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
                    <h5 className="card-header">Retailer request</h5>
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
                          {retailerReq &&
                            retailerReq.length > 0 &&
                            retailerReq.map((val, i) => {
                              const {
                                _id,
                                businessname,
                                ownername,
                                city,
                                area,
                                phonenumber,
                              } = val;

                              return (
                                <tr>
                                  <td>
                                    <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                    <strong>{ownername}</strong>
                                  </td>
                                  <td>{businessname}</td>
                                  <td>{`${area || ""},${city || ""}`}</td>
                                  <td>{phonenumber}</td>
                                  <td>
                                    <div className="dropdown">
                                      <Link
                                        className="dropdown-item"
                                        // to="/retailerdetailsr"
                                        to={{
                                          pathname: "/retailerdetailsr",
                                          state: { id: _id },
                                        }}
                                      >
                                        {" "}
                                        View Full Details
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
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
