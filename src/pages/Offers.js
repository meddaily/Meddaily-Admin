import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Offer() {
  return (
    <>
      

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">
                      Offers
                    </h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{padding:".625rem 5.25rem"}} >Product Name</th>
                            <th style={{padding:".625rem 5.25rem"}} >Offer</th>
                            <th style={{padding:".625rem 5.25rem"}} >Min Purchase</th>
                            <th style={{padding:".625rem 5.25rem"}} >Free Quantity</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td style={{padding:".625rem 5.25rem"}} >
                              <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                              <strong>Prabhahar</strong>
                            </td>
                            <td style={{padding:".625rem 5.25rem"}} >
                              {" "}
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
                                        Bonus Product Offer
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        to="javascript:void(0);"
                                      >
                                        Discount Offer
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td style={{padding:".625rem 5.25rem"}} >
                             100
                            </td>
                            <td style={{padding:".625rem 5.25rem"}} >10</td>
                           
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="content-backdrop fade"></div>
              </div>
            </div>
         
    </>
  );
}
