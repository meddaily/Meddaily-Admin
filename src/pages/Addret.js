import React from "react";
import toastr from "toastr";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import config from "../appConfig";


export default function Addret() {
  const history = useHistory();
  // const [retailer,setRetailer] = useState({
  //   typeOfBusiness: "",
  //   businessName: "",
  //   ownerName: "",
  //   businessAddress: "",
  //   pinCode: "",
  //   city: "",
  //   area: "",
  //   state: "",
  //   phoneNumber: "",
  //   password: "",
  //   confirmPassword: "",
  //   email: "",
  //   pharmacistName: "",
  //   pharmacistPhoneNumber: "",
  //   addDrugLicenceNumber: "",
  //   addDrugLicenceImage: "",
  //   addGstNumber: "",
  //   addGstImage: "",
  //   panNumber: "",
  // });
  // console.log(retailer);
  //  add sep usestate
  const [businesstype, setTypeOfBusiness] = useState("");
  const [businessname, setBusinessName] = useState("");
  const [OwnerName, setOwnerName] = useState("");
  const [address, setBusinessAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [pharmacistName, setPharmacistName] = useState("");
  const [PharmacistPhoneNo, setPharmacistPhoneNumber] = useState("");
  const [LisenceDetails, setAddDrugLicenceNumber] = useState("");
  const [addDrugLicenceImage, setAddDrugLicenceImage] = useState("");
  const [GSTINNumber, setAddGstNumber] = useState("");
  const [addGstImage, setAddGstImage] = useState("");
  const [PanNumber, setPanNumber] = useState("");



// console.log(businesstype,businessAddress,businessname,ownerName,pinCode,city,state,phoneNumber,password,confirmPassword,area,email,pharmacistName,pharmacistPhoneNumber,addDrugLicenceImage,addDrugLicenceNumber,addGstNumber,addGstImage,panNumber)


  // let name, value;
  // function handle(e) {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setRetailer({ ...retailer, [name]: value });
  // }

  //data send in backend by using async function postData
  const postData = async (e) => {
    e.preventDefault();
    // const {
    //   typeOfBusiness,
    //   businessName,
    //   ownerName,
    //   businessAddress,
    //   pinCode,
    //   city,
    //   area,
    //   state,
    //   phoneNumber,
    //   password,
    //   confirmPassword,
    //   email,
    //   pharmacistName,
    //   pharmacistPhoneNumber,
    //   addDrugLicenceNumber,
    //   addDrugLicenceImage,
    //   addGstNumber,
    //   addGstImage,
    //   panNumber,
    // } = retailer;

    if (!businesstype) {
      toastr.warning("Please select a business type!");
      return;
    }
    if (!businessname) {
      toastr.warning("Business name cannot be empty!");
      return;
    }
    if (!OwnerName) {
      toastr.warning("Owner name cannot be empty!");
      return;
    }
    if (!address) {
      toastr.warning("Business address cannot be empty!");
      return;
    }
    if (!pinCode) {
      toastr.warning("Pin code cannot be empty!");
      return;
    }
    if (!city) {
      toastr.warning("City cannot be empty!");
      return;
    }
    if (!area) {
      toastr.warning("Area cannot be empty!");
      return;
    }
    if (!state) {
      toastr.warning("State cannot be empty!");
      return;
    }
    if (!phoneNumber) {
      toastr.warning("Phone number cannot be empty!");
      return;
    }
    if (!password) {
      toastr.warning("Password cannot be empty!");
      return;
    }
    if (!confirmPassword) {
      toastr.warning("Confirm password cannot be empty!");
      return;
    }
    if (password !== confirmPassword) {
      toastr.warning("Passwords do not match!");
      return;
    }
    if (!email) {
      toastr.warning("Email cannot be empty!");
      return;
    }
    if (!pharmacistName) {
      toastr.warning("Pharmacist name cannot be empty!");
      return;
    }
    if (!PharmacistPhoneNo) {
      toastr.warning("Pharmacist phone number cannot be empty!");
      return;
    }
    if (!LisenceDetails) {
      toastr.warning("Drug licence number cannot be empty!");
      return;
    }

    if (!GSTINNumber) {
      toastr.warning("GST number cannot be empty!");
      return;
    }

    if (!PanNumber) {
      toastr.warning("PAN number cannot be empty!");
      return;
    }

    // const reqBody = {
    //   // businesstype: businesstype,
    //   // businessname: businessname,
    //   // ownername: ownername,
    //   // address: address,
    //   // pincode: pincode,
    //   // city: city,
    //   // area: area,
    //   // state: state,
    //   // phonenumber: phonenumber,
    //   // password: password,
    //   // confirmpassword: confirmpassword,
    //   // email: email,
    //   // pharname: pharname,
    //   // pharphone: pharphone,
    //   // licenseno: licenseno,
    //   // image1: image1,
    //   // gstno: gstno,
    //   // image2: image2,
    //   // panno: panno,
    //   businesstype: businesstype,
    //   businessname: businessname,
    //   ownername: ownerName,
    //   address: businessAddress,
    //   pincode: pinCode,
    //   city: city,
    //   area: area,
    //   state: state,
    //   phonenumber: phoneNumber,
    //   password: password,
    //   confirmpassword: confirmPassword,
    //   email: email,
    //   pharname: pharmacistName,
    //   pharphone: pharmacistPhoneNumber,
    //   licenseno: addDrugLicenceNumber,
    //   image1: addDrugLicenceImage,
    //   gstno: addGstNumber,
    //   image2: addGstImage,
    //   panno: panNumber,
    // };
    const formData = new FormData();
    formData.append("typeOfBusiness", businesstype);
    formData.append("businessName", businessname);
    formData.append("ownerName", OwnerName);
    formData.append("businessAddress", address);
    formData.append("pincode", pinCode);
    formData.append("city", city);
    formData.append("area", area);
    formData.append("state", state);
    formData.append("phone", phoneNumber);
    formData.append("password", password);
    formData.append("confirmpassword", confirmPassword);
    formData.append("email", email);
    formData.append("pharmacistName", pharmacistName);
    formData.append("PharmacistPhoneNo", PharmacistPhoneNo);
    formData.append("licenseNumber", LisenceDetails);
    formData.append("RetailerDrugLicenseImage", addDrugLicenceImage);
    formData.append("gstInNumber", GSTINNumber);
    formData.append("RetailerGSTCertificateImage", addGstImage);
    formData.append("panNumber", PanNumber);

    
    // formdata.append('typeOfBusiness', values.businesstype);
    // formdata.append('businessName', values.businessname);
    // formdata.append('ownerName', values.OwnerName);
    // formdata.append('businessAddress', values.address);
    // formdata.append('email', values.email);
    // formdata.append('area', values.address);
    // formdata.append('pincode', values.pinCode);
    // formdata.append('city', values.city);
    // formdata.append('state', values.state);
    // formdata.append('phone', values.phoneNumber);
    // formdata.append('password', values.password);
    // formdata.append('pharmacistName', values.PharmacistName);
    // formdata.append('PharmacistPhoneNo', values.PharmacistPhoneNo);
    // formdata.append('licenseNumber', values.LisenceDetails);
    // formdata.append('gstInNumber', values.GSTINNumber);
    // formdata.append('panNumber', values.PanNumber);

    try {
      const response = await axios.post(
        `${config.backendURL}/retailer_register`,
        formData
      );
      if (response.status === 200) {
        toastr.success(response.data.message);
        history.push("/retailerrequest");
        // setRetailer({
        //   typeOfBusiness: "",
        //   businessName: "",
        //   ownerName: "",
        //   businessAddress: "",
        //   pinCode: "",
        //   city: "",
        //   area: "",
        //   state: "",
        //   phoneNumber: "",
        //   password: "",
        //   confirmPassword: "",
        //   email: "",
        //   pharmacistName: "",
        //   pharmacistPhoneNumber: "",
        //   addDrugLicenceNumber: "",
        //   addDrugLicenceImage: "",
        //   addGstNumber: "",
        //   addGstImage: "",
        //   panNumber: "",
        // });
      }
    } catch (err) {
      toastr.error(err.response.data.message);
      console.error(err);
    }
  };

  const handlecancle =()=>{
    history.push("/retailerrequest");
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
                      <form id="formAccountSettings" onSubmit={postData}>
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
                              value={businesstype}
                              onChange={(e) =>
                                setTypeOfBusiness(e.target.value)
                              }
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
                              value={businessname}
                              onChange={(e) => setBusinessName(e.target.value)}
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
                              value={OwnerName}
                              onChange={(e) => setOwnerName(e.target.value)}
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
                              value={address}
                              onChange={(e) =>
                                setBusinessAddress(e.target.value)
                              }
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
                              value={pinCode}
                              onChange={(e) => setPinCode(e.target.value)}
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
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
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
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
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
                              onChange={(e) => setState(e.target.value)}
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
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
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
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
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
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
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
                                value={pharmacistName}
                                onChange={(e) =>
                                  setPharmacistName(e.target.value)
                                }
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
                                value={PharmacistPhoneNo}
                                onChange={(e) =>
                                  setPharmacistPhoneNumber(e.target.value)
                                }
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
                                value={LisenceDetails}
                                onChange={(e) =>
                                  setAddDrugLicenceNumber(e.target.value)
                                }
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
                                // value={addDrugLicenceImage}
                                onChange={(e) =>
                                  setAddDrugLicenceImage(e.target.files[0])
                                }
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
                                value={GSTINNumber}
                                onChange={(e) =>
                                  setAddGstNumber(e.target.value)
                                }
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
                                // value={addGstImage}
                                onChange={(e) =>
                                  setAddGstImage(e.target.files[0])
                                }

                                // onChange={handle}
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
                                value={PanNumber}
                                onChange={(e) => setPanNumber(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn me-2"
                            variant="text"
                            style={{backgroundColor:"#6EAFAB",color:"white"}}
                          >
                            Save
                          </button>
                          <button
                            type="reset"
                            className="btn"
                            variant="text"
                            style={{backgroundColor:"#DC143C",color:"white"}}
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
