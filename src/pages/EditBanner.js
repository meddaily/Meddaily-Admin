import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const EditBanner = () => {
  const [editBanner, setEditBanner] = useState({
    name: "",
    image: "",
    id: "",
  });
  const { name, image, id } = editBanneer;
  const location = useLocation();
  const { bannerId } = location.state;

  useEffect(() => {
    editBanneer();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBanner({ ...editBanner, [name]: value });
  };
  const editBanneer = async () => {
    try {
      const response = await axios.get(
        `http://13.235.8.138:81/editbanner/${bannerId}`
      );
      if (response.status === 200) {
        setEditBanner(response);
        console.log(response);
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
                      <h5 className="mb-0">Edit Banner</h5>
                      <small className="text-muted float-end">
                        Default label
                      </small>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings">
                        <div>
                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="imageUpload">Image:</label>
                          <input
                            type="file"
                            accept="image/*"
                            name="imageUpload"
                            id="imageUpload"
                            value={image}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="id">ID</label>
                          <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <button type="button">Update</button>
                          <button type="button">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
};

export default EditBanner;
