import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
export default function Addret() {
  const [retailer, setRetailer] = useState({
    typeOfBusiness: "",
    businessName: "",
    ownerName: "",
    businessAddress: "",
    pinCode: "",
    city: "",
    area: "",
    state: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    email: "",
    pharmacistName: "",
    pharmacistPhoneNumber: "",
    addDrugLicenceNumber: "",
    addDrugLicenceImage: "",
    addGstNumber: "",
    addGstImage: "",
    panNumber: "",
  });
  console.log(retailer);

  let name, value;
  function handle(e) {
    name = e.target.name;
    value = e.target.value;
    setRetailer({ ...retailer, [name]: value });
  }

  let history = useHistory();
  function handleclick() {
    history.push("/");
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
                      <h5 className="mb-0">ADD Retailer Details</h5>
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
                              for="typeOfBusiness"
                              className="form-label float-start"
                            >
                              Type of Business
                            </label>
                            <select
                              id="typeOfBusiness"
                              name="typeOfBusiness"
                              value={retailer.typeOfBusiness}
                              onChange={handle}
                              className="select2 form-select"
                              // onChange={handle}
                            >
                              <option value="">Select </option>
                              <option value="Chemist">Chemist</option>
                              <option value="Hospital">Hospital</option>
                              <option value="Doctor">Doctor</option>
                            </select>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="businessName"
                              className="form-label float-start"
                            >
                              Business Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="businessName"
                              id="businessName"
                              value={retailer.businessName}
                              onChange={handle}
                              placeholder={"Enter business name"}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="ownerName"
                              className="form-label float-start"
                            >
                              Owner Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="ownerName"
                              name="ownerName"
                              placeholder="Owner name"
                              value={retailer.ownerName}
                              onChange={handle}
                              autofocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="businessAddress"
                              className="form-label float-start"
                            >
                              Business Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="businessAddress"
                              name="businessAddress"
                              value={retailer.businessAddress}
                              onChange={handle}
                              placeholder="Business address"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="pinCode"
                              className="form-label float-start"
                            >
                              Pin Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="pinCode"
                              name="pinCode"
                              placeholder="231465"
                              maxlength="6"
                              value={retailer.pinCode}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="city"
                              className="form-label float-start"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              name="city"
                              placeholder="City"
                              value={retailer.city}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="area"
                              className="form-label float-start"
                            >
                              Area
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="area"
                              name="area"
                              placeholder="Enter your business area"
                              value={retailer.area}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="state"
                              className="form-label float-start"
                            >
                              select state
                            </label>
                            <select
                              id="state"
                              name="state"
                              className="select2 form-select"
                              onChange={handle}
                            >
                              <option value="">Select </option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujrat">Gujrat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
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
                                className="form-control"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="202 555 0111"
                                value={retailer.phoneNumber}
                                onChange={handle}
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="password"
                              className="form-label float-start"
                            >
                              password
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="password"
                              name="password"
                              value={retailer.password}
                              onChange={handle}
                              placeholder="12123323423"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="confirmPassword"
                              className="form-label float-start"
                            >
                              Confirm Password
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="confirmPassword"
                              name="confirmPassword"
                              value={retailer.confirmPassword}
                              onChange={handle}
                              placeholder="12123323423"
                            />
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
                              placeholder="john.doe@example.com"
                              value={retailer.email}
                              onChange={handle}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="pharmacistName"
                            >
                              Pharmacist name
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="text"
                                id="pharmacistName"
                                name="pharmacistName"
                                placeholder="enter pharmacist name"
                                value={retailer.pharmacistName}
                                onChange={handle}
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="pharmacistPhoneNumber"
                            >
                              Pharmacist Phone number
                            </label>
                            <div className="input-group input-group-merge">
                              <span className="input-group-text">IN (+91)</span>

                              <input
                                className="form-control"
                                type="text"
                                id="pharmacistPhoneNumber"
                                name="pharmacistPhoneNumber"
                                placeholder="phone numberF"
                                value={retailer.pharmacistPhoneNumber}
                                onChange={handle}
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="addDrugLicenceNumber"
                            >
                              add drug licence number
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="text"
                                id="addDrugLicenceNumber"
                                name="addDrugLicenceNumber"
                                placeholder="add drug licence number"
                                value={retailer.addDrugLicenceNumber}
                                onChange={handle}
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="addDrugLicenceImage"
                            >
                              add drug licence image
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="file"
                                id="addDrugLicenceImage"
                                name="addDrugLicenceImage"
                                placeholder="enter pharmacist name"
                                value={retailer.addDrugLicenceImage}
                                onChange={handle}
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="addGstNumber"
                            >
                              add gst number
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="text"
                                id="addGstNumber"
                                name="addGstNumber"
                                placeholder="add gst number"
                                value={retailer.addGstNumber}
                                onChange={handle}
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="addGstImage"
                            >
                              add gst image
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="file"
                                id="addGstImage"
                                name="addGstImage"
                                placeholder="enter pharmacist name"
                                value={retailer.addGstImage}
                                onChange={handle}
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              className="form-label float-start"
                              for="panNumber"
                            >
                              pan number
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="text"
                                id="panNumber"
                                name="panNumber"
                                placeholder="pan number"
                                value={retailer.panNumber}
                                onChange={handle}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Save
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
