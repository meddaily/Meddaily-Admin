
import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import config from "../appConfig";

export default function Returntable() {
  const authToken = localStorage.getItem("authToken");

  const [returnList, setReturnList] = useState([]);

  useEffect(() => {
    getAllReturns();
  }, [authToken]);

  async function getAllReturns() {
    await axios
      .get(`${config.backendURL}/return-order/all-return-orders`)
      .then((res) => {
        debugger
        if (res.status === 200) {
          setReturnList(res.data.data);
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
                    <h5 className="card-header">Return Table</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Vendor Name</th>
                            <th>Return Amount</th>
                            <th>Quantity</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {
                            returnList && returnList.length > 0 && returnList.map(item => [
                              <tr>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                {item.orderId || 'NA'}
                                </td>
                                <td>{item.userType || 'NA'}</td>
                                <td>
                                  {item.totalPrice || 0}
                                </td>
                                <td>
                                  {item.quantity || 0}
                                </td>
                                <td>
                                  <div className="dropdown">
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      {" "}
                                      View Full Details
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            ])
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
