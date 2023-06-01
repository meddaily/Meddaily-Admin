import React from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import config from "../appConfig";

export default function Addproduct() {
  const [product, setProduct] = useState({
    title: "",
    sub_title: "",
    productType: "",
    discription: "",
    taxes: "",
  });
  console.log(product);

  let name, value;
  function handle(e) {
    name = e.target.name;
    value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  //data send in backend by using async function postData
  const postData = async (e) => {
    e.preventDefault();
    const {
      productTitle,
      distributorName,
      productType,
      discription,
      taxes
    } = product;
    if (productTitle === '') {
      return toastr.warning('Product name cannot be empty !');
    }
    if (distributorName === '') {
      return toastr.warning('Manufacturer name cannot be empty !');
    }
    if (productType === '') {
      return toastr.warning('Meidicine type cannot be empty !');
    }

    const reqBody = {
      "productTitle": productTitle,
      "distributorName": distributorName,
      "productType": productType,
      "discription": discription,
      "taxes": taxes
    };
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json'
      }
    };

    await axios
    .post(`http://13.235.8.138:81/addProduct`, reqBody, axiosConfig)
    .then((res) => {
      debugger
      if (res.status === 200) {
        toastr.success(res.data.message);
        setProduct({
          productTitle: "",
          distributorName: "",
          productType: "",
          discription: "",
          taxes:""
        })
      }
    })
    .catch((err) => {
      toastr.error(err.response.data.message);
      console.log(err);
    });
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
                              name="productTitle"
                              id="productName"
                              value={product.productTitle}
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
                              name="distributorName"
                              id="mnfName"
                              value={product.distributorName}
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
                              name="productType"
                              value={product.productType}
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
                            onClick={event => postData(event)}
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
