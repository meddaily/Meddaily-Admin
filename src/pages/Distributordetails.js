import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
  // const [data,setData]=useState()
  const [order, setOrder] = useState("");
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    handleViewDetails();
    handleOrders();
  }, []);
  let history = useHistory();
  const hanndleApprove = async ()=>{
    try {
     await axios.post("https://api.meddaily.in/distributor_approve",
    {id:id}
    )
      history.push("/distributorlist");
    } catch (error) {
      console.error(error);
    }
  }


  const hanndleReject = async ()=>{
    try {
     await axios.post("https://api.meddaily.in/distributor_rejected",
    {id:id}
    )
      history.push("/distributorlist");
    } catch (error) {
      console.error(error);
    }
  }

  const handleViewDetails = async (e) => {
    try {
      const response = await axios.post(
        "https://api.meddaily.in/distributor_detail",
        { ...formData, id: id }
      );
      setFormData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrders = async () => {
    try {
      const response = await axios.get("https://api.meddaily.in/all_order");
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
    password,
    gst_number,
    gst_file,
    state,
    account_number,
    bank_name,
    benificiary_name,
    drug_licence,
    ifsc_code,
    image,
    pannumber,
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
                              readOnly
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
                              readOnly
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
                                readOnly
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
                              readOnly
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
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="country "
                            >
                              State
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              value={state}
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
                              readOnly
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
                              readOnly
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
                              readOnly
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
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              value={distributorcode}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="language"
                              className="form-label float-start"
                            >
                              Distributor Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              value={distributortype}
                            />
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
                              value={gst_number}
                              readOnly
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
                              value={pannumber || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Account Number
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={account_number || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Bank Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={bank_name || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Benificary Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={benificiary_name || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Drug Licence
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={drug_licence || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Ifsc Code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={ifsc_code || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Password
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={password || "NA"}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Image
                            </label>
                            <img width={"100%"} src={image} alt="img" />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Gst img
                            </label>
                            <img width={"100%"} src={gst_file} alt="gstimg" />
                          </div>
                        </div>
                        <div className="mt-2"></div>
                      </form>
                    </div>
                  </div>

                  {/* Filter Button  */}
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0"></h5>
                    <div class="btn-group d-flex">
                    <button
                          type="button"
                          class="btn btn-success"
                          style={{
                            marginRight:"5px",
                            borderRadius:"5px",
                            backgroundColor:"#6EAFAB"
                          }}
                          onClick={hanndleApprove}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          class="btn btn-success "
                          style={{
                            marginRight:"5px",
                            borderRadius:"5px",
                            backgroundColor:"crimson"
                          }}
                          onClick={hanndleReject}
                        >
                          Reject
                        </button>
                      {/* <button
                        type="button"
                        class="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          borderRadius:"5px"
                        }}
                      >
                        Filter
                      </button> */}
                      {/* <ul class="dropdown-menu">
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
                      </ul> */}
                    </div>
                  </div>
                  

                  {/* Total payment */}

                  {/* <div className="card"> */}
                    {/* <h5 className="card-header float-start">Payment Details</h5> */}
                    {/* <div className="table-responsive text-nowrap"> */}
                      {/* <table className="table"> */}
                        {/* <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Retailer name</th>
                            <th>Total Amount </th>

                            <th>Details</th>
                          </tr>
                        </thead> */}
                        {/* <tbody className="table-border-bottom-0">
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
                                    {/* <div className="dropdown">
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
                        </tbody>  */}

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
                      {/* </table> */}
                    {/* </div> */}
                  {/* </div> */}
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
