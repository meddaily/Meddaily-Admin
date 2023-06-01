import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
export default function Distributordetails() {
  const defaultFormData = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    city: "",
    area: "",
    distributorcode: "",
    distributortype: "",
    pincode: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [order, setOrder] = useState("");
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    handleViewDetails();
    handleOrders();
  }, []);

  const handleViewDetails = async (e) => {
    try {
      const response = await axios.post(
        "http://13.235.8.138:81/distributor_detail",
        { ...formData, id: id }
      );
      setFormData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrders = async () => {
    try {
      const response = await axios.get("http://13.235.8.138:81/all_order");
      setOrder(response?.data?.message);
    } catch (error) {
      console.error(error);
    }
  };
  const {
    firstname,
    lastname,
    phonenumber,
    email,
    city,
    area,
    distributorcode,
    distributortype,
    pincode,
  } = formData;

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
                      <h5 className="mb-0">Distributor Details</h5>
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
                              for="firstName"
                              className="form-label float-start"
                            >
                              First Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={firstname}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  firstname: e.target.value,
                                })
                              }
                              autofocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="lastName"
                              className="form-label float-start"
                            >
                              Last Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              value={lastname}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  lastname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="phoneNumber "
                            >
                              Phone Number
                            </label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">IN (+91)</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                value={Number(phonenumber)}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phonenumber: e.target.value,
                                  })
                                }
                                placeholder="202 555 0111"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="email"
                              className="form-label float-start"
                            >
                              E-mail
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value={email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              placeholder="john.doe@example.com"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="organization"
                              className="form-label float-start"
                            >
                              Business name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              value="ThemeSelection"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  firstname: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="zipCode"
                              className="form-label float-start"
                            >
                              Postal Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zipCode"
                              name="zipCode"
                              value={pincode}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  pincode: e.target.value,
                                })
                              }
                              placeholder="231465"
                              maxlength="6"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="City"
                              name="City"
                              value={city}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
                              }
                              placeholder="City"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="state"
                              className="form-label float-start"
                            >
                              Area
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="Area"
                              value={area}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  area: e.target.value,
                                })
                              }
                              name="Area"
                              placeholder="Area"
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="country "
                            >
                              Distributor Code
                            </label>
                            <select
                              id="country"
                              className="select2 form-select"
                            >
                              <option value="">{distributorcode}</option>
                              <option value="Australia">Australia</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Canada">Canada</option>
                              <option value="China">China</option>
                              <option value="France">France</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea, Republic of</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Russia">Russian Federation</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="language"
                              className="form-label float-start"
                            >
                              Distributor Type
                            </label>
                            <select
                              id="language"
                              className="select2 form-select"
                            >
                              <option value="">{distributortype}</option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="pt">Portuguese</option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Gst No
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="12123323423"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Gst img
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="view/img.jpg"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Pan No
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="12123323423"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Pan img
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="view/img.jpg"
                            />
                          </div>
                        </div>
                        <div className="mt-2"></div>
                      </form>
                    </div>
                  </div>

                  {/* Filter Button  */}
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0"></h5>
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Filter
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">
                            Filter By Week
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">
                            Filter By Month
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">
                            Custom Filter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Total payment */}

                  <div className="card">
                    <h5 className="card-header float-start">Payment Details</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Retailer name</th>
                            <th>Total Amount </th>

                            <th>Details</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {order &&
                            order.length > 0 &&
                            order.map((val, i) => {
                              const {
                                _id,
                                order_id,
                                retailer_id,
                                price,
                                products,
                              } = val;
                              return (
                                <tr key={_id}>
                                  <td>{order_id}</td>
                                  <td>{retailer_id}</td>
                                  <td>{price}</td>
                                  <td>
                                    {/* Render the details or link */}
                                    <div className="dropdown">
                                      <Link
                                        className="dropdown-item"
                                        to="/distributordetails"
                                      >
                                        View Full Details
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>

                        {/* <tbody className="table-border-bottom-0">
                          {order &&
                            order.length > 0 &&
                            order.map((val, i) => {
                              const [order_id] = val;
                              console.log("order_id: ", order_id);
                              return (
                                <tr>
                                  <td>
                                    <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                    <strong>Prabhahar</strong>
                                  </td>
                                  <td>Medi</td>
                                  <td>
                                    28, balaji street, barani nagar,vannar
                                    pettai.
                                  </td>

                                  <td>
                                    <div className="dropdown">
                                      <Link
                                        className="dropdown-item"
                                        to="/distributordetails"
                                      >
                                        {" "}
                                        View Full Details
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody> */}
                      </table>
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
