import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { MDBDataTable } from 'mdbreact';

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
      setRetailerReq(response?.data?.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
    },
    {
      label: 'Business Name',
      field: 'bname',
      sort: 'asc',
    },
    {
      label: 'Address',
      field: 'address',
      sort: 'asc',
    },
    {
      label: 'Phone',
      field: 'phone',
      sort: 'asc',
    },
    {
      label: 'Details',
      field: 'details',
    },
  ];

  const rows = retailerReq.map((item, i) => ({
    name: item.ownername,
    bname: item.businessname? item.businessname:'N/A',
    address: item.area+' '+item.city+' ',
    phone: item.phonenumber,
    details: (
      <Link
      className="dropdown-item"
      // to="/distributordetails"
      to={{
        pathname: "/retailerdetails",
        state: { id: item._id },
      }}
    >
      {" "}
      View Full Details
    </Link>
    ),
  }));

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
                    {/* <div className="table-responsive text-nowrap">
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
                    </div> */}
                    <div className="table-responsive text-nowrap">
                      <MDBDataTable
                        striped
                        bordered
                        hover
                        data={{ columns, rows }}
                        responsive
                        noBottomColumns={true}
                      />
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
