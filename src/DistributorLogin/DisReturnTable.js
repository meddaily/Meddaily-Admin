import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Loading from "../Loading/Loading";

export default function DisReturnTable() {
  const authToken = localStorage.getItem("disToken");
  const [returnList, setReturnList] = useState([]);

  useEffect(() => {
    getAllReturns();
  }, [authToken]);

  async function getAllReturns() {
    try {
      const response = await axios.post(
        `http://api.meddaily.in/return_order_accept`,
        {},
        {
          headers: {
            token: `${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        setReturnList(response?.data?.data);
      }
    } catch (err) {
      toastr.error(err?.response?.data?.message);
      console.log(err);
    }
  }

  const formattedData = [returnList];
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
                          {formattedData && formattedData.length > 0 ? (
                            <tr>
                              <td>
                                <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                {formattedData.order_id || "NA"}
                              </td>
                              <td>{formattedData.name || "NA"}</td>
                              <td>{formattedData.price || 0}</td>
                              <td>{formattedData.quantity || 0}</td>
                              <td>
                                <div className="dropdown">
                                  <Link className="dropdown-item" to="#">
                                    {" "}
                                    View Full Details
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            // <Loading />
                            <>
                              <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                  <Loading />
                                </td>
                              </tr>
                            </>
                          )}
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
