import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import toastr from "toastr";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      const response = await axios.get(`http://api.meddaily.in/getbanner`);
      if (response.status === 200) {
        setBanner(response?.data?.data);
      }
    } catch (error) {
      setBanner([]);
    }
  };

  const handleDel = async (id) => {
    try {
      const res = await axios.delete(
        `http://api.meddaily.in/deletebanner/${id}`
      );
      if (res.status === 200) {
        toastr.success(res?.data?.message);
        getBanner();
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
                  <div className="card mb-12">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Listing All Banners</h5>
                    </div>
                    <hr className="my-0" />

                    <div className="card-body">
                      <div className="container-fluid mt-4">
                        <div className="row">
                          <div className="col-md-12 d-flex justify-content-between">
                            <h3 className="text-muted">Listing All Banners</h3>
                            <Link to="/addnewban">
                              <button className="btn btn-primary">
                                Add New Banner
                              </button>
                            </Link>
                          </div>
                          <hr className="mt-4" />
                          <div className="col-md-12 mt-3">
                            <table className="table table-striped table-responsive">
                              <thead>
                                <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">Title</th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {banner &&
                                  banner.length > 0 &&
                                  banner.map((item, ind) => {
                                    const { image, name } = item;
                                    const index = ind + 1;
                                    return (
                                      <tr key={ind}>
                                        <td>{index}</td>
                                        <td>{name}</td>
                                        <td>
                                          <img
                                            src={image}
                                            alt="banner"
                                            style={{
                                              width: "100px",
                                              height: "100px",
                                              objectFit: "cover",
                                            }}
                                          />
                                        </td>
                                        <td>
                                          <Link
                                            to={{
                                              pathname: "/editbanner",
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
                                            style={{cursor:"pointer"}}
                                          >
                                            <FaTrash className="action-icon" />{" "}
                                            {/* Delete Icon */}
                                          </span>
                                        </td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
