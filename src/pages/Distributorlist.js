import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { MDBDataTable } from 'mdbreact';
import config from "../appConfig";
// import Distributordata from "./Distributordata";

export default function Distributorlist() {
  const authToken = localStorage.getItem("authToken");

  const [distributorList, setDistributorList] = useState([]);

  useEffect(() => {
    getAllDistributors();
  }, [authToken]);

  async function getAllDistributors() {
    await axios
      .get(`${config.backendURL}/distributor_list`)
      .then((res) => {
        if (res.status === 200) {
          setDistributorList(res?.data?.data.reverse());
        }
      })
      .catch((err) => {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      });
  }
  const columns = [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
    },
    {
      label: 'distributor code',
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

  const rows = distributorList.map((item, i) => ({
    name: item.firstname+' '+item.lastname,
    bname: item.distributorcode? item.distributorcode:'N/A',
    address: item.area+ ' '+item.city+' ',
    phone: item.phonenumber,
    details: (
      <button
      className="btn"
      variant="text"
      style={{backgroundColor:"#6EAFAB"}}>

        <Link
       style={{color:"white"}}
        to={{
          pathname: "/distributordetailsr",
          state: { id: item._id },
        }}
      >
        View Full Details
      </Link>
      </button>
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
                    <h5 className="card-header float-start">
                      Distributor List
                    </h5>
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
                          {distributorList &&
                            distributorList.length > 0 &&
                            distributorList.map((dist, k) => [
                              <tr key={k}>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  <strong>{`${dist.firstname || ""} ${
                                    dist.lastname
                                  }`}</strong>
                                </td>
                                <td>{dist.distributorCode || "NA"}</td>
                                <td>
                                  {`${dist.area || ""}, ${dist.city || ""}
                                   ${
                                    dist.state || ""
                                  } ${dist.pinCode || ""}` || "NA"}
                                </td>
                                <td>{Number(dist.phonenumber) || "NA"}</td>
                                <td>
                                  <div className="dropdown">
                                    <Link
                                      className="dropdown-item"
                                      // to="/distributordetails"
                                      to={{
                                        pathname: "/distributordetails",
                                        state: { id: dist._id },
                                      }}
                                    >
                                      {" "}
                                      View Full Details
                                    </Link>
                                  </div>
                                </td>
                              </tr>,
                            ])}
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
