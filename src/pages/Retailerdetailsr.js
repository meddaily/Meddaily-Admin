import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import toastr from "toastr";

import axios from "axios";
export default function Retailerdetailsr() {
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
  async function handleclick() {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `http://api.meddaily.in/retailer_approve`,
        { id },
        axiosConfig
      );
      if (response.status == 200) {
        toastr.success(response.data.message);
        setFormData("");
        history.push("/retailerlist");
      }
    } catch (error) {
      console.log(error);
    }
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
                              defaultValue={ownername}
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
                              defaultValue={businessname}
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
                              defaultValue={businesstype}
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
                                defaultValue={phonenumber}
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
                              defaultValue={email}
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
                              maxlength="6"
                              defaultValue={pincode}
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
                              defaultValue={city}
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
                              defaultValue={area}
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
                              defaultValue={licenseno}
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
                              defaultValue={licenseimage}
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
                              defaultValue={gstno}
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
                              defaultValue={gstimg}
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
                              defaultValue={panno}
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
                              defaultValue={panimg}
                            />
                          </div>
                        </div>
                        <div className="mt-2"></div>
                      </form>

                      {/* button */}
                      <div className="col-12">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{
                            backgroundColor: "Darkblue",
                            border: "Darkblue",
                          }}
                          onClick={handleclick}
                        >
                          Approve
                        </button>
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
