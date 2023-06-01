import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
export default function Distributordetails() {
  const [formData, setFormData] = useState({
    gstno: "",
    gstimg: "",
    bankname: "",
    benificiaryname: "",
    accountno: "",
    ifsccode: "",
    upiid: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  let history = useHistory();
  // function handleclick() {
  //   // history.push("#");
  //   const handleAppandAdd = async () => {
  //     const reqBody = {
  //        "gstNo":"",
  //           };
  //     const axiosConfig = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     try {
  //       const res = axios.post(
  //         "http://13.235.8.138:81/distributor_approve",
  //         reqBody,
  //         axiosConfig
  //       );
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   handleAppandAdd();
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://13.235.8.138:81/distributor_approve",
        formData,
        axiosConfig
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
                    {/* Gst Info */}
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Gst Information</h5>
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
                              for="timeZones"
                              className="form-label float-start"
                            >
                              GST NO.
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="12123323423"
                              value={formData.gstno}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              GST img
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="view/img.jpg"
                              value={formData.gstimg}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="mt-2"></div>
                      </form>
                    </div>

                    {/* Bank details */}
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Bank Information</h5>
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
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Bank Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="Bank Name"
                              value={formData.bankname}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Benificiary Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="Benificiary Name"
                              value={formData.benificiaryname}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              Account No.
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="123456789"
                              value={formData.accountno}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              IFSC
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="12123323423"
                              value={formData.ifsccode}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              for="timeZones"
                              className="form-label float-start"
                            >
                              UPI ID
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="gst"
                              name="gst"
                              placeholder="12345678"
                              value={formData.upiid}
                              onChange={handleInputChange}
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
                          // onClick={handleclick}
                          onClick={handleSubmit}
                        >
                          Approve and add
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
