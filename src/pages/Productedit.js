import React, { useEffect } from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../DistributorLogin/DistContext/DisContext";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import config from "../appConfig";

export default function Productedit() {
  const [title, setTitle] = useState("");
  const [sub_title, setSubTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [applicableTax, setApplicableTax] = useState("");
  const history = useHistory();

  // contextapi
  const { category } = useContext(ApiContext);

  const {id} = useParams();
  console.log(id,"id");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${config.backendURL}/editproduct/${id}`,
          axiosConfig
        );
        
        if (response.status === 200) {
          console.log(response?.data.data[0].title);
          setTitle(response.data.data[0].title);
          setSubTitle(response.data.data[0].sub_title);
          setCategoryId(response.data.data[0].category_id);
          setDescription(response.data.data[0].description);
          setApplicableTax(response.data.data[0].applicable_tax);
        }
      } catch (err) {
        toastr.error(err.response?.data.message);
        console.log(err);
      }
    };
  
    fetchData(); 
  
  }, [id]);
  
  const updateProduct = async () => {
    try {
      const updatedProduct = {
        id: id,
        title: title,
        sub_title: sub_title,
        category_id: categoryId,
        description: description,
        applicable_tax: applicableTax,
      };
      console.log(">>>",updateProduct);
      const response = await axios.post(
        `${config.backendURL}/updateproduct`,
        updatedProduct,
        axiosConfig
      );

      if (response.status === 200) {
        toastr.success("Product updated successfully");
      }
    } catch (err) {
      toastr.error(err.response?.data.message || "Error updating product");
      console.error(err);
    }
  };

  const handleCancel = () => {
    history.push("/");
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
                      <h5 className="mb-0">Edit Product</h5>
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
                              Category
                            </label>
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
                              htmlFor="applicable_tax"
                              className="form-label float-start"
                            >
                              Applicable Tax
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="applicable_tax"
                              id="applicable_tax"
                              value={applicableTax}
                              onChange={(e) => setApplicableTax(e.target.value)}
                              placeholder={"Enter Tax"}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            onClick={updateProduct}
                            className="btn  me-2"
                            variant="text"
                            style={{backgroundColor:"#6EAFAB",color:"white"}}
                          >
                            Edit
                          </button>
                          <button
                            type="reset"
                            className="btn "
                            onClick={handleCancel}
                            variant="text"
                            style={{backgroundColor:"#DC143C",color:"white"}}
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
