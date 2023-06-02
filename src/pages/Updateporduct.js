import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Updateproduct() {
  const [productName, setProductName] = useState("");
  const [mnfType, setMnfType] = useState("");
  const [medType, setMedType] = useState("");
  const [description, setDescription] = useState("");
  const [taxes, setTaxes] = useState("");

  const handleCancel = () => {
    setProductName("");
    setMnfType("");
    setMedType("");
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
                      <form
                        id="formAccountSettings"
                        method="POST"
                        onSubmit="return false"
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="firstName"
                              className="form-label float-start"
                            >
                              Product Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="Product Name"
                              value={productName}
                              onChange={(e) => setProductName(e.target.value)}
                              autoFocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="lastName"
                              className="form-label float-start"
                            >
                              Mnf Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              placeholder="Manufacturer"
                              value={mnfType}
                              onChange={(e) => setMnfType(e.target.value)}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              htmlFor="phoneNumber "
                            >
                              Med Type
                            </label>
                            <div className="input-group input-group-merge">
                              <select
                                id="medType"
                                name="productType"
                                value={medType}
                                onChange={(e) => setMedType(e.target.value)}
                                className="select2 form-select"
                              >
                                <option value="">Select </option>
                                <option value="OTC">OTC</option>
                                <option value="Generic">Generic</option>
                                <option value="Branded">Branded</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="email"
                              className="form-label float-start"
                            >
                              Discription
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder="Discription"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="organization"
                              className="form-label float-start"
                            >
                              Taxes
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              placeholder="0000"
                              value={taxes}
                              onChange={(e) => setTaxes(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Update
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
