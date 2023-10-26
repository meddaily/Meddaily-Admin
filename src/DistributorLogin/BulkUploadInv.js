import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Addbul() {
  const [bul, setBul] = useState({
    csvFile: "",
  });
  console.log(bul);

  let name, value;
  function handle(e) {
    name = e.target.name;
    value = e.target.value;
    setBul({ ...bul, [name]: value });
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
                      <h5 className="mb-0">Upload csv file</h5>
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
                              className="form-label float-start"
                              for="csvFile"
                            ></label>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                type="file"
                                id="csvFile"
                                name="csvFile"
                                placeholder="enter pharmacist name"
                                value={bul.csvFile}
                                onChange={handle}
                                accept=".xlsx, .xls .csv"
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <div className="mt-2">
                              <button className="btn btn-primary me-2">
                                <a
                                  href="https://www.google.co.in/"
                                  target={"_blank"}
                                >
                                  {" "}
                                  Download sample file
                                </a>
                              </button>
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
