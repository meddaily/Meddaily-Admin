import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function Retailerdetails() {
  const defaultFormData = {
    ownername: "",
    businessname: "",
    businesstype: "",
    phonenumber: "",
    email: "",
    city: "",
    area: "",
    licenseno: "",
    licenseimage: "",
    pincode: "",
    gstno: "",
    gstimg: "",
    panno: "",
    panimg: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  // const [data,setData]=useState()
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    handleRetailerDetails();
  }, []);

  let history = useHistory();
  const hanndleApprove = async ()=>{
    try {
    await axios.post("https://api.meddaily.in/retailer_approve",
    {id:id}
    )
      history.push("/retailerlist");
    } catch (error) {
      console.error(error);
    }
  }

  const hanndleReject = async ()=>{
    try {
    await axios.post("https://api.meddaily.in/retailer_rejected",
    {id:id}
    )
      history.push("/retailerlist");
    } catch (error) {
      console.error(error);
    }
  }

  const handleRetailerDetails = async (e) => {
    try {
      const response = await axios.post(
        "https://api.meddaily.in/retailer_detail",
        { ...formData, id: id }
      );
      setFormData(response?.data?.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const {
    ownername,
    businessname,
    businesstype,
    phonenumber,
    email,
    city,
    area,
    licenseno,
    licenseimage,
    pincode,
    gstno,
    panno,
    panimg,
    address,
    gstimage,
    password,
    pharname,
    pharphone,
    state,
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
                      <h5 className="mb-0">Retailer Details</h5>
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
                              Owner Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={ownername}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  ownername: e.target.value,
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
                              Business Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              value={businessname}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  businessname: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="organization"
                              className="form-label float-start"
                            >
                              Business Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              value={businesstype}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  businesstype: e.target.value,
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
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Drug Licence No
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="12123323423"
                              value={licenseno}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  licenseno: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Drug Licence img
                            </label>
                           <img width={"100%"} src={licenseimage} alt="img" />
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
                              value={gstno}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  gstno: e.target.value,
                                })
                              }
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
                              value={panno}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  panno: e.target.value,
                                })
                              }
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Address
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              value={address}
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
                              value={password}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Pharma Name
                            </label>
                            <input
                              className="form-control"
                              value={pharname}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Pharma Phone
                            </label>
                            <input
                              className="form-control"
                              value={pharphone}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              State
                            </label>
                            <input
                              className="form-control"
                              value={state}
                              readOnly
                            />
                          </div>

                          {/* <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Pan img
                            </label>
                            <img src={panimg} alt="panimg" />
                          </div> */}
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Gst img
                            </label>
                            <img width={"100%"} src={gstimage} alt="gstimg" />
                          </div>
                        </div>
                        <div className="mt-2"></div>
                      </form>

                      {/* button */}
                      <div class="col-12">
                        {/* <button
                          type="button"
                          class="btn btn-primary"
                          style={{
                            backgroundColor: "Darkblue",
                            border: "Darkblue",
                          }}
                          // onClick={handleclick}
                        >
                          Approve and add
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
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
                          class="btn btn-success"
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
                        aria-expanded="false" style={{
                          borderRadius:"5px"
                        }}
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
                      </ul> */}
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
