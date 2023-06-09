import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Ham.css";

import Dropdown from "react-bootstrap/Dropdown";

function Ham() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    if (sidebar) {
      document.body.style.overflow = "visible";
      setTimeout(() => {
        setSidebar(!sidebar);
      }, 2000);
    } else {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setSidebar(!sidebar);
      }, 0);
    }
  };

  return (
    <>
      <div value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <i className="bx bx-menu bx-sm" onClick={showSidebar}></i>
          </Link>
        </div>
        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          id={sidebar ? "on" : "off"}
        >
          <ul
            className="nav-menu-items"
            onClick={showSidebar}
            style={{ width: "100%", left: "-10rem" }}
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>
            <aside className=" menu-vertical menu bg-menu-theme h-100 d-block position-absolute left-0 start-0 position-absolute">
              <div className="app-brand demo">
                <Link to="/distdashboard" className="app-brand-link">
                  <img
                    src="../assets/img/logo2.png"
                    alt="logo"
                    style={{ height: "70px", width: "150px" }}
                  />
                </Link>
              </div>

              <div className="menu-inner-shadow"></div>
              <ul className="menu-inner py-1">
                <li className="menu-item ">
                  <Link to="/distdashboard" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                    <div data-i18n="Analytics">Dashboard</div>
                  </Link>
                </li>

                {/* Orders */}
                <li className="menu-item ">
                  <Link to="/orderlist" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Orders</div>
                  </Link>
                </li>

                {/* Inventory */}
                <li className="menu-item">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Layouts">Inventory</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item">
                        <Link to="/myinventory" className="menu-link">
                          <div data-i18n="Without menu">My Inventory</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/bulkuploadinv" className="menu-link">
                          <div data-i18n="Without navbar">Update Bulk</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/listnewinv" className="menu-link">
                          <div data-i18n="Without navbar">
                            List New Products To Inventory
                          </div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/addnewinv" className="menu-link">
                          <div data-i18n="Container">Request To Add New</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                {/* Payments */}
                <li className="menu-item ">
                  <Link to="/distdashboard" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Payments</div>
                  </Link>
                </li>

                {/* Offers */}
                <li className="menu-item ">
                  <Link to="/distdashboard" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Offers</div>
                  </Link>
                </li>
                {/* Return */}
                <li className="menu-item ">
                  <Link to="/distreturn" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Return</div>
                  </Link>
                </li>
                {/* Settings */}
                <li className="menu-item ">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Layouts">Settings</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item active">
                        <Link to="#" className="menu-link">
                          <div data-i18n="Without menu">Websites Banner</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="menu-link">
                          <div data-i18n="Without navbar">App Banner</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="#" className="menu-link">
                          <div data-i18n="Container">Profile Setting</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </aside>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Ham;
