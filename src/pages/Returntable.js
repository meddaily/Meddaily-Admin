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
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    if (fromDate && toDate) {
      getAllReturns();
    }
  }, [fromDate, toDate]);

  async function getAllReturns() {
    try {
      const response = await axios.get(
        `http://api.meddaily.in/get_return_admin?from=${fromDate}&to=${toDate}`
      );
      if (response.status === 200) {
        console.log(response.data.data);
        setReturnList(response?.data?.data);
      }
    } catch (err) {
      toastr.error(err.response.data.message);
      console.log(err);
    }
  }

  console.log(returnList);

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  return (
    <>
    
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header">Return Table</h5>
                    <div className="card-body">
                      <div className="row mb-3">
                        <label
                          htmlFor="fromDate"
                          className="col-sm-2 col-form-label text-end"
                        >
                          From Date:
                        </label>
                        <div className="col-sm-4">
                          <input
                            type="date"
                            id="fromDate"
                            className="form-control"
                            value={fromDate}
                            onChange={handleFromDateChange}
                          />
                        </div>
                        <label
                          htmlFor="toDate"
                          className="col-sm-2 col-form-label text-end"
                        >
                          To Date:
                        </label>
                        <div className="col-sm-4">
                          <input
                            type="date"
                            id="toDate"
                            className="form-control"
                            value={toDate}
                            onChange={handleToDateChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Vendor Name</th>
                            <th>Return Amount</th>
                            <th>Quantity</th>
                            <th>Payment Type</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {returnList && returnList.length > 0 ? (
                            returnList.map((item, i) => (
                              <tr key={i}>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  {item.order_id || "NA"}
                                </td>
                                <td>{item.name || "NA"}</td>
                                <td>{item.price || 0}</td>
                                <td>{item.order_status || 0}</td>
                                <td>{item.payment_type || "NA"}</td>
                                <td>
                                  <div className="dropdown">
                                    <Link className="dropdown-item" to="#">
                                      {" "}
                                      View Full Details
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center">
                                No data available
                              </td>
                            </tr>
                          )}
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
