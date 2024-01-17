import React from "react";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import config from "../appConfig";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function Adddis() {
  const [distributor, setDistributor] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    pinCode: "",
    city: "",
    area: "",
    state: "",
    businessName: "",
    companyName: "",
    password: "",
    distributorCode: "",
    distributorType: "",
    gstNumber: "", // New field
    drugLicence: "", // New field
    bankName: "", // New field
    beneficiaryName: "", // New field
    accountNumber: "", // New field
    ifscCode: "", // New field
    image1: "",
    image2: ""
  });

  const history = useHistory();

  let name, value;
  function handle(e) {
    name = e.target.name;
    value = e.target.value;
    setDistributor({ ...distributor, [name]: value });
  }

  const handleFileChange = (e, name) => {
    const file = e.target.files[0];
    setDistributor({ ...distributor, [name]: file });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      pinCode,
      city,
      area,
      state,
      businessName,
      companyName,
      password,
      distributorCode,
      distributorType,
      gstNumber, // New field
      drugLicence, // New field
      bankName, // New field
      beneficiaryName, // New field
      accountNumber, // New field
      ifscCode, 
      confirmPassword,// New field
      image1,
      image2
    } = distributor;

    if (firstName === "") {
      return toastr.warning("firstname cannot be empty !");
    }
    if (lastName === "") {
      return toastr.warning("lastname cannot be empty !");
    }
    if (phoneNumber === "") {
      return toastr.warning("phonenumber cannot be empty !");
    }
    if (email === "") {
      return toastr.warning("email cannot be empty !");
    }
    if (city === "") {
      return toastr.warning("city cannot be empty !");
    }
    if (area === "") {
      return toastr.warning("area cannot be empty !");
    }
    if (pinCode === "") {
      return toastr.warning("pincode cannot be empty !");
    }
    if (state === "") {
      return toastr.warning("state cannot be empty !");
    }
    if (businessName === "") {
      return toastr.warning("businessname cannot be empty !");
    }
    if (companyName === "") {
      return toastr.warning("company cannot be empty !");
    }
    if (password === "") {
      return toastr.warning("password cannot be empty !");
    }
    if (confirmPassword === "") {
      return toastr.warning("confirmpassword cannot be empty !");
    }
    if (password !== confirmPassword) {
      return toastr.warning("Password and Confirm Password must match!");
    }
    if (distributorCode === "") {
      return toastr.warning("distributorcode cannot be empty !");
    }
    if (distributorType === "") {
      return toastr.warning("distributortype  cannot be empty !");
    }
    const formData = new FormData();

    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("phonenumber", phoneNumber);
    formData.append("email", email);
    formData.append("pincode", pinCode);
    formData.append("city", city);
    formData.append("area", area);
    formData.append("state", state);
    formData.append("businessname", businessName);
    formData.append("companyname", companyName);
    formData.append("password", password);
    formData.append("distributorcode", distributorCode);
    formData.append("distributortype", distributorType);
    formData.append("gst_number", gstNumber); 
    formData.append("confirmpassword", confirmPassword);
    formData.append("image1", image1);
    formData.append("drug_licence", drugLicence); 
    formData.append("image2", image2);
    formData.append("bank_name", bankName); 
    formData.append("benificiary_name", beneficiaryName); 
    formData.append("account_number", accountNumber); 
    formData.append("ifsc_code", ifscCode); 

    const axiosConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        "https://api.meddaily.in/distributor_register",
        formData,
        axiosConfig
      );

      if (res.status === 200) {
        toastr.success(res.data.message);
        history.push("/distributorrequest");
        setDistributor({
          // Reset all fields to empty values
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          pinCode: "",
          city: "",
          area: "",
          state: "",
          businessName: "",
          companyName: "",
          password: "",
          distributorCode: "",
          distributorType: "",
          gstNumber: "",
          drugLicence: "",
          bankName: "",
          beneficiaryName: "",
          accountNumber: "",
          ifscCode: "",
          image1: "",
          image2: "",
        });
      }
    } catch (err) {
      toastr.warning(err.response.data.message);
      console.log(err);
    }
  };

  const handlecancle = () => {
    history.push("/distributorrequest");
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
                      <h5 className="mb-0">ADD Distributor Details</h5>
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
                              value={distributor.firstName}
                              onChange={handle}
                              placeholder="Enter first name"
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
                              placeholder="Enter last name"
                              value={distributor.lastName}
                              onChange={handle}
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
                                className="form-control"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="202 555 0111"
                                value={distributor.phoneNumber}
                                onChange={handle}
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
                              placeholder="john.doe@example.com"
                              value={distributor.email}
                              onChange={handle}
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
                              value={distributor.pinCode}
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
                              value={distributor.city}
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
                              value={distributor.area}
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
                              for="businessName"
                              className="form-label float-start"
                            >
                              Business name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="businessName"
                              name="businessName"
                              value={distributor.businessName}
                              onChange={handle}
                              placeholder="Enter business name"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="companyName"
                              className="form-label float-start"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyName"
                              name="companyName"
                              value={distributor.companyName}
                              onChange={handle}
                              placeholder="Enter business name"
                            />
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
                              value={distributor.password}
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
                              value={distributor.confirmPassword}
                              onChange={handle}
                              placeholder="12123323423"
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="distributorCode"
                              className="form-label float-start"
                            >
                              Distributor Code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="distributorCode"
                              name="distributorCode"
                              placeholder="121233"
                              value={distributor.distributorCode}
                              onChange={handle}
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label
                              for="distributorType"
                              className="form-label float-start"
                            >
                              Distributor Type
                            </label>
                            <select
                              id="distributorType"
                              name="distributorType"
                              className="select2 form-select"
                              onChange={handle}
                            >
                              <option value="">Select </option>
                              <option value="Generic Distributor">
                                Generic Distributor
                              </option>
                              <option value="OTC Distributor">
                                OTC Distributor
                              </option>
                              <option value="Branded Distributor">
                                Branded Distributor
                              </option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label float-start" htmlFor="addGstImage">
                              Add GST Image
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                type="file"
                                className="form-control"
                                id="addGstImage"
                                name="image1"
                                accept="image/*"  // Add this to restrict file types to images
                                onChange={(e) => handleFileChange(e, "image1")} // New function to handle file changes
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label htmlFor="gstNumber" className="form-label float-start">
                              GST Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="gstNumber"
                              name="gstNumber"
                              placeholder="Enter gst number"
                              value={distributor.gstNumber}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label float-start" htmlFor="addDrugImage">
                              Add Drug Image
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                type="file"
                                className="form-control"
                                id="addDrugImage"
                                name="image2"
                                accept="image/*"  // Add this to restrict file types to images
                                onChange={(e) => handleFileChange(e, "image2")} // New function to handle file changes
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="drugLicence" className="form-label float-start">
                              Drug Licence
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="drugLicence"
                              name="drugLicence"
                              placeholder="Enter drugLicence number"
                              value={distributor.drugLicence}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="bankName" className="form-label float-start">
                              Bank Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="bankName"
                              name="bankName"
                              placeholder="Enter Bank Name"
                              value={distributor.bankName}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="beneficiaryName" className="form-label float-start">
                              Beneficiary Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="beneficiaryName"
                              name="beneficiaryName"
                              placeholder="Enter Beneficiary Name"
                              value={distributor.beneficiaryName}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="accountNumber" className="form-label float-start">
                              Account Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="accountNumber"
                              name="accountNumber"
                              placeholder="Enter Account Number"
                              value={distributor.accountNumber}
                              onChange={handle}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="ifscCode" className="form-label float-start">
                              IFSC Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ifscCode"
                              name="ifscCode"
                              placeholder="Enter Ifsc Code"
                              value={distributor.ifscCode}
                              onChange={handle}
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            onClick={(event) => postData(event)}
                            className="btn me-2"
                            variant="text"
                            style={{ backgroundColor: "#6EAFAB", color: "white" }}
                          >
                            Save
                          </button>
                          <button
                            type="reset"
                            className="btn"
                            variant="text"
                            style={{ backgroundColor: "#DC143C", color: "white" }}
                            onClick={handlecancle}
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
