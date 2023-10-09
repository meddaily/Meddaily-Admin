import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link, useHistory } from "react-router-dom";
// import config from "../appConfig";

export default function Login() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setpassword(e.target.value);
  };

  async function login() {
    if (email === "") {
      return toastr.warning("Please enter credentials");
    }
    if (password === "") {
      return toastr.warning("Please enter credentials");
    }
    const reqBody = {
      phone: email,
      password: password,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        
      },
    };
    await axios
      .post(`https://api.meddaily.in/distributor_login`, reqBody, axiosConfig)
      .then((res) => {
        if (res.data.status === true) {
          const distributorId = res.data.data._id; // Get the _id from the response data object
          localStorage.setItem("id", distributorId); // Set the _id in localStorage
          localStorage.setItem("disToken", res?.data?.token);
          history.push("/distdashboard");
          window.location.reload();
        } else {
          toastr.error(res?.data?.message);
        }
      })
      .catch((err) => {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      });
  }

  return (
    <>
      <div className="container-xxl" style={{ width: "45rem" }}>
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div
                  className="app-brand justify-content-center"
                  style={{ padding: "1rem .5rem" }}
                >
                  <Link to="index.html" className="app-brand-link gap-2">
                    <img
                      src="../assets/img/logo2.png"
                      alt="user"
                      style={{ height: "120px", width: "300px" }}
                    />
                  </Link>
                </div>

                <div id="formAuthentication" className="mb-3">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label float-start">
                      Email or Username /distributor login
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email or username"
                      onChange={handleChangeEmail}
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        onChange={handleChangePassword}
                        aria-describedby="password"
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label className="form-check-label" htmlFor="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn d-grid w-100"
                      type="submit"
                      onClick={login}
                      style={{ background: "#6eafab", color: "white" }}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
