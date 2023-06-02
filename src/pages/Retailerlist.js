import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import config from "../appConfig";
// import { Button } from "react-bootstrap";


export default function Retailerlist() {
  const authToken = localStorage.getItem("authToken");

  const [retailerList, setRetailerList] = useState([]);

  useEffect(() => {
    getAllRetailers();
  }, [authToken]);

  async function getAllRetailers() {
    await axios
      .get(`http://13.235.8.138:81/retailer_list`)
      .then((res) => {
        if (res.status === 200) {
          setRetailerList(res.data.data);
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
                          {
                            retailerList && retailerList.length > 0 && retailerList.map((ret, k) => [
                              <tr key={k.toString()}>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  <strong>{ret.ownername || 'NA'}</strong>
                                </td>
                                <td>{ret.businessname || 'NA'}</td>
                                <td>
                                {`${ret.address || ''}, ${ret.area || ''}, ${ret.city || ''}` || 'NA'}
                                </td>
                                <td>{ret.phonenumber || 'NA'}</td>
                                <td>
                                  <div className="dropdown">
                                    <Link
                                      className="dropdown-item"
                                      // to="/retailerdetails"
                                      to={{
                                        pathname: "/retailerdetails",
                                        state: { id: ret._id },
                                      }}
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