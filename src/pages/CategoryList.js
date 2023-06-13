import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import config from "../appConfig";

export default function CategoryList() {
  const authToken = localStorage.getItem("authToken");

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, [authToken]);

  async function getCategoryList() {
    try {
      const res = await axios.get(`http://api.meddaily.in/getcategory`);
      if (res.status === 200) {
        setCategoryList(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
                    <h5 className="card-header">Category Table</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Id</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {categoryList &&
                            categoryList.length > 0 &&
                            categoryList.map((item, i) => (
                              <tr key={i}>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  {item.name || "NA"}
                                </td>
                                <td>
                                  <img src={item.image || "NA"} alt="img" />{" "}
                                </td>
                                <td>{item._id || "NA"}</td>
                                <td>
                                  <div className="dropdown">
                                    <Link className="dropdown-item" to="#">
                                      {" "}
                                      View Full Details
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            ))}
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
