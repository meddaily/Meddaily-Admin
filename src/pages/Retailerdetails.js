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
  const location = useLocation();
  const { id } = location.state;
  let history = useHistory();
  function handleclick() {
    history.push("#");
  }
  useEffect(() => {
    handleRetailerDetails();
  }, []);

  const handleRetailerDetails = async (e) => {
    try {
      const response = await axios.post(
        "http://api.meddaily.in/retailer_detail",
        { ...formData, id: id }
      );
      setFormData(response?.data?.data);
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
    gstimg,
    panno,
    panimg,
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
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Drug Licence img
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="view/img.jpg"
                              value={licenseimage}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  licenseimage: e.target.value,
                                })
                              }
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
                              placeholder="12123323423"
                              value={gstno}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  gstno: e.target.value,
                                })
                              }
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
                              value={gstimg}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  gstimg: e.target.value,
                                });
                              }}
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
                              value={panno}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  panno: e.target.value,
                                })
                              }
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
                              value={panimg}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  panimg: e.target.value,
                                })
                              }
                            />
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
