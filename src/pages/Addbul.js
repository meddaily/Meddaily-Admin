import React from "react";
// import { Link } from "react-router-dom";
import toastr from "toastr";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../DistributorLogin/DistContext/DisContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Addbul() {
  const [bul, setBul] = useState({
    csvFile: "",
    category: "",
  });
  const [categoryId, setCategoryId] = useState("");
  const { category } = useContext(ApiContext);
  const history = useHistory();

  console.log(categoryId);
  console.log(category);
  console.log(bul.csvFile);

  const handleCancel = () => {
    setBul({ csvFile: "", category: "" });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setBul({ ...bul, csvFile: file });
    } else {
      setBul({ ...bul, csvFile: "" });
      console.log("Invalid file type. Please select an Excel file.");
    }
  };

  // const handleCategoryChange = (e) => {
  //   const categoryName = e.target.value;
  //   setBul({ ...bul, category: categoryName });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    if (!bul.csvFile) {
      console.log("Please select an Excel file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", bul.csvFile);
    formData.append("category", categoryId);

    try {
      const response = await axios.post(
        "https://api.meddaily.in/bulkupload",
        formData
      );
      if (response.status === 200) {
        toastr.success(response?.data?.message);
        setBul({ csvFile: "", category: "" });
        document.getElementById("csvFile").value = "";
        history.push("/producttable");
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
                      <h5 className="mb-0">Upload csv file</h5>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              htmlFor="csvFile"
                            >
                              Choose an Excel file:
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="file"
                                id="csvFile"
                                name="csvFile"
                                accept=".xlsx, .xls"
                                onChange={handleFileChange}
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              htmlFor="category"
                            >
                              Category name:
                            </label>
                            <div className="input-group input-group-merge">
                              {/* <input
                                className="form-control"
                                type="text"
                                id="category"
                                name="category"
                                value={bul.category}
                                onChange={handleCategoryChange}
                              /> */}
                              <select
                                id="medType"
                                name="productType"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="select2 form-select"
                              >
                                <option value="">Select</option>
                                {category &&
                                  category.length > 0 &&
                                  category.map((categoryItem) => (
                                    <option
                                      key={categoryItem._id}
                                      value={categoryItem._id}
                                    >
                                      {categoryItem.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Save
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
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
