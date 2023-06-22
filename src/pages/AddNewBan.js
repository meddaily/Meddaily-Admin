import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import toastr from "toastr";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddNewBan = () => {
  const [addBanner, setBanner] = useState({
    name: "",
    image: "",
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addBanner.name === "") {
      toastr.warning("name cannot be blank");
      return;
    }
    if (addBanner.image === "") {
      toastr.warning("image cannot be blank");
      return;
    }

    const formData = new FormData();
    formData.append("name", addBanner.name);
    formData.append("image", addBanner.image);
    try {
      const res = await axios.post(
        `http://api.meddaily.in/addbanner`,
        formData
      );
      if (res.status === 200) {
        toastr.success(res?.data?.message);
        history.push("/banner");
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
                      <h5 className="mb-0">Add New Banner</h5>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <div className="row">
                        <form id="formAccountSettings" onSubmit={handleSubmit}>
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
                                  value={addBanner.name}
                                  onChange={(e) =>
                                    setBanner((prevData) => ({
                                      ...prevData,
                                      name: e.target.value,
                                    }))
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="imageUpload"
                                  className="form-label"
                                >
                                  Image:
                                </label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  name="imageUpload"
                                  id="imageUpload"
                                  className="form-control"
                                  onChange={(e) =>
                                    setBanner((prevData) => ({
                                      ...prevData,
                                      image: e.target.files[0],
                                    }))
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <button type="submit" className="btn btn-primary">
                              Add
                            </button>
                            <button
                              type="reset"
                              className="btn btn-secondary mx-3"
                              onClick={(e)=>setBanner("")}
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
      </div>
    </>
  );
};

export default AddNewBan;
