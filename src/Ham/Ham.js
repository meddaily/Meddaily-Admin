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
                <Link to="/" className="app-brand-link">
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
                  <Link to="/" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                    <div data-i18n="Analytics">Dashboard</div>
                  </Link>
                </li>

                {/* Vendor Management */}
                <li className="menu-item active">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Layouts">Distributor Management</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item active">
                        <Link to="/distributorlist" className="menu-link">
                          <div data-i18n="Without menu">Distributor List</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/distributorrequest" className="menu-link">
                          <div data-i18n="Without navbar">
                            Distributor Request
                          </div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/adddis" className="menu-link">
                          <div data-i18n="Container">Add distributor</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                {/* Retailer Management */}
                <li className="menu-item">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Layouts">Retailer Management</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item">
                        <Link to="/retailerlist" className="menu-link">
                          <div data-i18n="Without menu">Retailer List</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/retailerrequest" className="menu-link">
                          <div data-i18n="Without navbar">Retailer Request</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/addret" className="menu-link">
                          <div data-i18n="Container">Add Retailer</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                {/* Products */}
                <li className="menu-item">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Layouts">Products</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item active">
                        <Link to="/producttable" className="menu-link">
                          <div data-i18n="Without menu">View Products</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/addproduct" className="menu-link">
                          <div data-i18n="Without navbar">Add new Products</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/addbul" className="menu-link">
                          <div data-i18n="Container">Bul Add</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                {/* Orgders */}
                {/* <li className="menu-item ">
                  <Link to="/ordertable" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Orders</div>
                  </Link>
                </li> */}
                <li className="menu-item ">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Analytics">Orders</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item active">
                        <Link to="/ordertable" className="menu-link">
                          <div data-i18n="Without menu">View Orders</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/addorder" className="menu-link">
                          <div data-i18n="Without navbar">Add new Order</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {/* category */}
                <li className="menu-item ">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Analytics">Category</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item active">
                        <Link to="/categorylist" className="menu-link">
                          <div data-i18n="Without menu">Category List</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/addnewcategory" className="menu-link">
                          <div data-i18n="Without navbar">Add new Category</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
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

                {/* Offer and deal */}
                <li className="menu-item ">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      className="menu-link menu-toggle"
                    >
                      <i className="menu-icon tf-icons bx bx-box"></i>
                      <div data-i18n="Layouts">Offers & Deal</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <li className="menu-item active">
                        <Link to="/offer" className="menu-link">
                          <div data-i18n="Without menu">Create Offers</div>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/distributorrequest" className="menu-link">
                          <div data-i18n="Without navbar">All Offers</div>
                        </Link>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {/*Returns  */}
                <li className="menu-item ">
                  <Link to="/returntable" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Returns</div>
                  </Link>
                </li>
                {/* Payout Req */}
                <li className="menu-item ">
                  <Link to="/payouttable" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-box"></i>
                    <div data-i18n="Analytics">Payout Req</div>
                  </Link>
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
