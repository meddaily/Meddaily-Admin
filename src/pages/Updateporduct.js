import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import toastr from "toastr";
import { useContext } from "react";
import { ApiContext } from "../DistributorLogin/DistContext/DisContext";

export default function Updateproduct() {
  const defaultFormData = {
    productName: "",
    mnfType: "",
    categoryId: "",
    description: "",
  };
  const [edit, setEdit] = useState(defaultFormData);
  const location = useLocation();
  const id = location.state.id;

  console.log(edit);
  // context api
  const { category } = useContext(ApiContext);
  console.log("edit", category);

  useEffect(() => {
    axios
      .get(`http://api.meddaily.in/editproduct/${id}`)
      .then((response) => {
        setEdit(response.data.data[0]);
        console.log("object", response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { title, sub_title, description, category_id, _id } = edit;
  const history = useHistory();
  const handleUpdate = async (event) => {
    event.preventDefault();
    const reqbody = {
      title: title,
      sub_title: sub_title,
      description: description,
      category_id: category_id,
      _id: _id,
    };

    try {
      const response = await axios.post(
        "http://api.meddaily.in/updateproduct",
        reqbody
      );
      console.log(response);

      if (response.status === 200) {
        toastr.success(response?.data?.message);
        history.push("/producttable");
      } else {
        toastr.error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
      toastr.error("Failed to update product");
    }
  };

  const handleCancel = () => {
    setEdit(defaultFormData);
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
                        // method="POST"
                        // onSubmit="return false"
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
                              value={title}
                              onChange={(e) =>
                                setEdit({
                                  ...edit,
                                  title: e.target.value,
                                })
                              }
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
                              value={sub_title}
                              onChange={(e) =>
                                setEdit({
                                  ...edit,
                                  sub_title: e.target.value,
                                })
                              }
                            />
                          </div>
                          {/* <div className="mb-3 col-md-6">
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
                                onChange={(e) =>
                                  setEdit({
                                    ...edit,
                                    medType: e.target.value,
                                  })
                                }
                                className="select2 form-select"
                              >
                                <option value="">Select </option>
                                <option value="OTC">OTC</option>
                                <option value="Generic">Generic</option>
                                <option value="Branded">Branded</option>
                              </select>
                            </div>
                          </div> */}
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
                              value={category_id}
                              onChange={(e) =>
                                setEdit({
                                  ...edit,
                                  category_id: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setEdit({
                                  ...edit,
                                  description: e.target.value,
                                })
                              }
                              placeholder="Discription"
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            onClick={handleUpdate}
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
