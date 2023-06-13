import React from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import config from "../appConfig";

export default function Addproduct() {
  const [title, setTitle] = useState("");
  const [sub_title, setSubTitle] = useState("");
  const [productType, setProductType] = useState("");
  const [description, setDescription] = useState("");
  const [taxes, setTaxes] = useState("");

  const postData = async (e) => {
    e.preventDefault();
    if (title === "") {
      return toastr.warning("Product name cannot be empty !");
    }
    if (sub_title === "") {
      return toastr.warning("Manufacturer name cannot be empty !");
    }
    if (productType === "") {
      return toastr.warning("Meidicine type cannot be empty !");
    }

    const reqBody = {
      title: title,
      sub_title: sub_title,
      productType: productType,
      description: description,
      taxes: taxes,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `http://api.meddaily.in/addProduct`,
        reqBody,
        axiosConfig
      );
      // debugger;
      if (response.status === 200) {
        toastr.success(response.data.message);
        setTitle("");
        setSubTitle("");
        setProductType("");
        setDescription("");
        setTaxes("");
      }
    } catch (err) {
      toastr.error(err.response.data.message);
      console.log(err);
    }
  };
  const handleCancel = () => {
    setTitle("");
    setSubTitle("");
    setProductType("");
    setDescription("");
    setTaxes("");
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
                      <h5 className="mb-0">ADD Product</h5>
                      <small className="text-muted float-end">
                        Default label
                      </small>
                    </div>

                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="businessName"
                              className="form-label float-start"
                            >
                              Product Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="productTitle"
                              id="productName"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder={"Enter product name"}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="mnfName"
                              className="form-label float-start"
                            >
                              mnf Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="distributorName"
                              id="mnfName"
                              value={sub_title}
                              onChange={(e) => setSubTitle(e.target.value)}
                              placeholder={"Enter mnf name"}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="medType"
                              className="form-label float-start"
                            >
                              MNF type
                            </label>
                            <select
                              id="medType"
                              name="productType"
                              value={productType}
                              onChange={(e) => setProductType(e.target.value)}
                              className="select2 form-select"
                            >
                              <option value="">Select </option>
                              <option value="OTC">OTC</option>
                              <option value="Generic">Generic</option>
                              <option value="Branded">Branded</option>
                            </select>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="discription"
                              className="form-label float-start"
                            >
                              Discription
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="discription"
                              id="discription"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder={"Enter discription"}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="taxes"
                              className="form-label float-start"
                            >
                              Taxes
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="taxes"
                              id="taxes"
                              value={taxes}
                              onChange={(e) => setTaxes(e.target.value)}
                              placeholder={"taxes"}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            onClick={(event) => postData(event)}
                            className="btn btn-primary me-2"
                          >
                            Add
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
