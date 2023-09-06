import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AddNewInventory = () => {
  const [distributorList, setDistributorList] = useState("");
  return (
    <>
     
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">My Inventory</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Business name</th>
                            <th>Price</th>
                            <th>InStock</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        {/* <tbody className="table-border-bottom-0">
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
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
    </>
  );
};

export default AddNewInventory;
