import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FaPencilAlt, FaTrash } from "react-icons/fa";


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

  const handleDel = async (id) => {
    try {
      const res = await axios.delete(
        `http://api.meddaily.in/deletecategory/${id}`
      );
      if (res.status === 200) {
        toastr.success(res?.data?.message);
        getCategoryList();
      }
    } catch (error) {
      console.log(error);
    }
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
                    <h5 className="card-header">Category Table</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Img</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {categoryList &&
                            categoryList.length > 0 &&
                            categoryList.map((item, ind) => (
                              <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  {item.name || "NA"}
                                </td>
                                <td>
                                  {item.image ? (
                                    <img
                                      src={item.image}
                                      alt="img"
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  ) : (
                                    "NA"
                                  )}{" "}
                                </td>
                                {/* <td>{item._id || "NA"}</td> */}
                                <td>
                                  <Link
                                    to={{
                                      pathname: "/editcategory",
                                      state: { id: item._id },
                                    }}
                                  >
                                    <span className="text-info">
                                      <FaPencilAlt className="action-icon" />{" "}
                                      {/* Edit Icon */}
                                    </span>
                                  </Link>
                                  <span
                                    onClick={() => handleDel(item._id)}
                                    className="text-danger"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <FaTrash className="action-icon" />{" "}
                                    {/* Delete Icon */}
                                  </span>
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
