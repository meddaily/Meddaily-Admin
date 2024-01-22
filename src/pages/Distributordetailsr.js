import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

export default function Distributordetailsr() {
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
    // accountnumber: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const location = useLocation();
  const { id } = location.state;
  let history = useHistory();
  // function handleclick(e) {
  //   history.push("/gstinfo");
  // }
  useEffect(() => {
    handleDistDetails();
  }, []);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const axiosConfig = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

    // try {
    //   const res = await axios.post(
    //     `https://api.meddaily.in/distributor_approve`,
    //     { id },
    //     axiosConfig
    //   );
    //   if (res.status === 200) {
    //     toastr.success("Distributor Approved");
    //     history.push("./distributorlist");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  // };
  // const handleCancel = async (event) => {
  //   event.preventDefault();
  //   const axiosConfig = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const res = await axios.post(
  //       `https://api.meddaily.in/distributor_rejected`,
  //       { distributorId:id },
  //       axiosConfig
  //     );
  //     if (res.status === 200) {
  //       toastr.success("Distributor Rejected");
  //       history.push("./distributorlist");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleDistDetails = async (e) => {
    try {
      const response = await axios.post(
        "https://api.meddaily.in/distributor_detail",
        { ...formData, id: id , distributorId:id}
      );
      setFormData(response?.data?.data);
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
    state,
    account_number,
    bank_name,
    benificiary_name,
    drug_licence,
    gst_file,
    ifsc_code,
    image,
    gst_number,
    password,
    distributorId,
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
                              for="phoneNumber"
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
                                placeholder="202 555 0111"
                                value={phonenumber}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phonenumber: e.target.value,
                                  })
                                }
                                readOnly
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
                              placeholder="231465"
                              value={pincode}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  pincode: e.target.value,
                                })
                              }
                              readOnly
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
                              placeholder="City"
                              value={city}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
                              }
                              readOnly
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
                              name="Area"
                              placeholder="Area"
                              value={area}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  area: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="country"
                            >
                              Distributor Code
                            </label>
                            {/* <select
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
                            </select> */}
                            <input
                              className="form-control"
                              type="text"
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
                            {/* <select
                              id="language"
                              className="select2 form-select"
                            >
                              <option value="">{distributortype} </option>
                              <option value="en">English</option>
                              <option value="fr">French</option>
                              <option value="de">German</option>
                              <option value="pt">Portuguese</option>
                            </select> */}
                            <input
                              className="form-control"
                              type="text"
                              readOnly
                              value={distributortype}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              Account Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="accountNumber"
                              name="accountNumber"
                              placeholder="accountNumber"
                              value={account_number}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  accountnumber: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              Bank Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={bank_name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  bank_name: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              Benificary Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={benificiary_name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  benificiary_name: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              Ifsc Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={ifsc_code}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ifsc_code: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              Drug Licence Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={drug_licence}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  drug_licence: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              GST Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={gst_number}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  gst_number: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              Password
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={password}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  password: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              GST Image
                            </label>
                            <img src={gst_file} alt="img" style={{width:"100%"}}/>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="address"
                              className="form-label float-start"
                            >
                              drug licence image
                            </label>
                            <img src={image} alt="img"  style={{width:"100%"}}/>
                          </div>
                        </div>
                        <div className="mt-2"></div>
                      </form>

                      {/* button */}
                      <div className="col-12">
                        {/* <Link
                          to={{
                            pathname: "/gstinfo",
                            state: { id: id },
                          }}
                        >
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{
                              backgroundColor: "Darkblue",
                              border: "Darkblue",
                            }}
                          >
                            Review Button
                          </button>
                        </Link> */}
                        {/* <button
                          type="button"
                          className="btn btn-primary"
                          style={{
                            backgroundColor: "Darkblue",
                            border: "Darkblue",
                          }}
                          onClick={handleSubmit}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{
                            backgroundColor: "red",
                            border: "red",
                            marginLeft:"10px"
                          }}
                          onClick={handleCancel}
                        >
                          Cancel */}
                        {/* </button> */}
                      </div>
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
