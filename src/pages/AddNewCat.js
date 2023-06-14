import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import toastr from "toastr";

const AddNewCat = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqbody = {
      name: name,
      image: image,
    };
    try {
      const response = await axios.post(
        "http://api.meddaily.in/addcategory",
        reqbody,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toastr.success(response?.data?.message);

      setName("");
      setImage("");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setImage("");
  };
  console.log(name, image);
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
                      <h5 className="mb-0">ADD New Category</h5>
                    </div>
                    <hr className="my-0" />

                    <div className="card-body">
                      <form id="formAccountSettings" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="name"
                              className="form-label float-start"
                            >
                              Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              autoFocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="image"
                              className="form-label float-start"
                            >
                              Image:
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              id="image"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                        </div>

                        <div>
                          <button type="submit" className="btn btn-primary">
                            Add Category
                          </button>
                          <button
                            className="btn btn-outline-secondary mx-3"
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
    </>
  );
};

export default AddNewCat;
