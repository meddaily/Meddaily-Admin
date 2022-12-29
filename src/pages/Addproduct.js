import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Addproduct() {
  const [product, setProduct] = useState({
    productName: "",
    mnfName: "",
    medType: "",
    discription: "",
    taxes: "",
  });
  console.log(product);

  let name, value;
  function handle(e) {
    name = e.target.name;
    value = e.target.value;
    setProduct({ ...product, [name]: value });
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
                        onsubmit="return false"
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label
                              for="businessName"
                              className="form-label float-start"
                            >
                              Product Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="productName"
                              id="productName"
                              value={product.productName}
                              onChange={handle}
                              placeholder={"Enter product name"}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="mnfName"
                              className="form-label float-start"
                            >
                              mnf Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="mnfName"
                              id="mnfName"
                              value={product.mnfName}
                              onChange={handle}
                              placeholder={"Enter mnf name"}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="medType"
                              className="form-label float-start"
                            >
                              MNF type
                            </label>
                            <select
                              id="medType"
                              name="medType"
                              value={product.medType}
                              onChange={handle}
                              className="select2 form-select"
                              // onChange={handle}
                            >
                              <option value="">Select </option>
                              <option value="OTC">OTC</option>
                              <option value="Generic">Generic</option>
                              <option value="Branded">Branded</option>
                            </select>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="discription"
                              className="form-label float-start"
                            >
                              Disdription
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="discription"
                              id="discription"
                              value={product.discription}
                              onChange={handle}
                              placeholder={"Enter discription"}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="taxes"
                              className="form-label float-start"
                            >
                              Taxes
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="taxes"
                              id="taxes"
                              value={product.taxes}
                              onChange={handle}
                              placeholder={"taxes"}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Add
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
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
