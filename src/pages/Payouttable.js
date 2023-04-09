import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import config from "../appConfig";

export default function Payouttable() {
  const authToken = localStorage.getItem("authToken");

  const [payoutList, setPayoutList] = useState([]);

  useEffect(() => {
    getAllPayout();
  }, [authToken]);

  async function getAllPayout() {
    await axios
      .get(`${config.backendURL}/payments/get-all-payments`)
      .then((res) => {
        debugger
        if (res.status === 200) {
          setPayoutList(res.data.data);
        }
      })
      .catch((err) => {
        toastr.error(err.response.data.message);
        console.log(err);
      });
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
                    <h5 className="card-header">Payout Request</h5>
                    <div className="table-responsive text-nowrap">
                      <table   className="table">
                        <thead>
                          <tr>
                            <th style={{padding:".625rem 6.25rem"}} >Request ID</th>
                            <th style={{padding:".625rem 6.25rem"}} >Vendor name</th>
                            <th style={{padding:".625rem 6.25rem"}} >Amount</th>
                            <th style={{padding:".625rem 6.25rem"}}  >Created</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {
                            payoutList && payoutList.length > 0 && payoutList.map(item => [
                              <tr>
                                <td style={{padding:".625rem 6.25rem"}} >
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  <strong>1</strong>
                                </td>
                                <td style={{padding:".625rem 6.25rem"}} >Rohit</td>
                                <td style={{padding:".625rem 6.25rem"}} >9090</td>
                                <td style={{padding:".625rem 6.25rem"}} >
                                  <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0"></h5>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn btn-secondary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        Action
                                      </button>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <Link
                                            className="dropdown-item"
                                            to="javascript:void(0);"
                                          >
                                            Paid
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="dropdown-item"
                                            to="/updateproduct"
                                          >
                                            Reject
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ])
                          }
                          {
                            payoutList && payoutList.length === 0 && (
                              <tr><td colSpan="4">No Data</td></tr>
                            )
                          }
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
