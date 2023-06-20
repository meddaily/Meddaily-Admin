import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import toastr from "toastr";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const EditBanner = () => {
  const [editBannerData, setEditBannerData] = useState({
    name: "",
    image: "",
  });
  const history = useHistory();
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    getEditBanner();
  }, [id]);
  const getEditBanner = async () => {
    try {
      const res = await axios.get(`http://api.meddaily.in/editbanner/${id}`);
      setEditBannerData(res?.data?.data?.[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateBanner = async () => {
    const reqbody = {
      name: editBannerData.name,
      image: editBannerData.image,
      id: id,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `http://api.meddaily.in/updatebanner`,
        reqbody,
        axiosConfig
      );
      if (res.status === 200) {
        toastr.success(res?.data?.message);
        history.push("/banner");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setEditBannerData((prevData) => ({
      ...prevData,
      name: "",
      image: "",
    }));
  };

  return (
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
                    <h5 className="mb-0">Edit Banner</h5>
                    <small className="text-muted float-end">
                      Default label
                    </small>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body">
                    <form id="formAccountSettings">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Name:
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              value={editBannerData.name}
                              onChange={(e) =>
                                setEditBannerData((prevData) => ({
                                  ...prevData,
                                  name: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="imageUpload" className="form-label">
                              Image:
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              name="imageUpload"
                              id="imageUpload"
                              className="form-control"
                              onChange={(e) =>
                                setEditBannerData((prevData) => ({
                                  ...prevData,
                                  image: e.target.files[0],
                                }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleUpdateBanner}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary mx-3"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBanner;
