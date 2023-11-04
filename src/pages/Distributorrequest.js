import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { MDBDataTable } from 'mdbreact';

export default function Distributorrequest() {
  const [distReq, setDistReq] = useState([]);

  const handleDistReq = async () => {
    try {
      const response = await axios.get(
        "https://api.meddaily.in/distributor_request"
      );
      setDistReq(response?.data?.data.reverse());
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleDistReq();
  }, []);

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

  const rows = distReq.map((item, i) => ({
    name: item.firstname+' '+item.lastname,
    bname: item.distributorCode? item.distributorCode:'N/A',
    address: item.area+ ' '+item.city+' ',
    phone: item.phonenumber,
    details: (
      <Link
      className="dropdown-item"
      // to="/distributordetails"
      to={{
        pathname: "/distributordetails",
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
                    <h5 className="card-header">Distributor request</h5>
                    {/* <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            {/* <th>Business name</th> 
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Details</th>
                          </tr>
                        </thead>

                        <tbody className="table-border-bottom-0">
                          {distReq &&
                            distReq.length > 0 &&
                            distReq.map((val, i) => {
                              const { firstname, lastname, phonenumber,distributorCode,city,area } = val;
                              return (
                                <tr key={i}>
                                  <td>
                                    <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                    <strong>{`${
                                      firstname || ""
                                    } ${lastname}`}</strong>
                                  </td>
                                  <td>{city || "NA"}</td>
                                  <td>
                                  {`${area || ""}, ${city || ""}`}
                                  </td>
                                  <td>{phonenumber}</td>
                                  <td>
                                    <div className="dropdown">
                                      <Link
                                        className="dropdown-item"
                                        // to="/distributordetailsr"
                                        to={{
                                          pathname: "/distributordetailsr",
                                          state: { id: val._id },
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
