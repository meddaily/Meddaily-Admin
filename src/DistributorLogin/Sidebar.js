import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function Sidebar() {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Link to="/distdashboard" className="app-brand-link">
          <img
            src="../assets/img/logo2.png"
            alt="logo"
            style={{ height: "90px", width: "175px" }}
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
  );
}
