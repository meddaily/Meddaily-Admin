import React from "react";
import { Link } from "react-router-dom";
export default function Login() {


  return (
    <>
      <div class="container-xxl" style={{width:"45rem"}}>
        <div className="authentication-wrapper authentication-basic container-p-y" >
          <div className="authentication-inner">
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center" style={{padding:"1rem .5rem"}}>
                  <Link to="index.html" className="app-brand-link gap-2">
                    <img src="../assets/img/logo.png" alt="user" />
                  </Link>
                </div>

                <form
                  id="formAuthentication"
                  className="mb-3"
                  action="index.html"
                  method="POST"
                >
                  <div className="mb-3">
                    <label for="email" className="form-label float-start">
                      Email or Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      autofocus
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" for="password">
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
                      <label className="form-check-label" for="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-grid w-100"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
