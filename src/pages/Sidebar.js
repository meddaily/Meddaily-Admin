import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function Sidebar(props) {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" >
            <div className="app-brand demo">
              <Link to="/" className="app-brand-link">
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
          <div onClick={()=>props.sideMenuClick('dashbord')} className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </div>
        </li>

        {/* Orgders */}
        <li className="menu-item ">
          <div onClick={()=>props.sideMenuClick('orders')} className="menu-link">
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Analytics">Orders</div>
            </div>
        </li>
        {/* category */}
        <li className="menu-item ">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="menu-link menu-toggle"
            >
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Analytics">Inventory</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li className="menu-item active">
                <div onClick={()=>props.sideMenuClick('myinventory')} className="menu-link">
                  <div data-i18n="Without menu">My Inventory</div>
                </div>
              </li>
              <li className="menu-item">
                <div onClick={()=>props.sideMenuClick('bulkuploadinv')} className="menu-link">
                  <div data-i18n="Without navbar">Update Bulk</div>
                </div>
              </li>
              <li className="menu-item">
                <div onClick={()=>props.sideMenuClick('listnewinv')} className="menu-link">
                  <div data-i18n="Without navbar">List New products To Inventory</div>
                </div>
              </li>
              <li className="menu-item">
                <div onClick={()=>props.sideMenuClick('addnewinv')} className="menu-link">
                  <div data-i18n="Without navbar">Request To Add New</div>
                </div>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        {/* Banners */}
        <li className="menu-item ">
          <div onClick={()=>props.sideMenuClick('Payouttable')} className="menu-link">
            <i className="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Analytics">Payments</div>
          </div>
        </li>

        {/* Offers */}
        <li className="menu-item ">
        <div onClick={()=>props.sideMenuClick('offers')} className="menu-link">
          <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="Layouts">Offers</div>
              </div>
        </li>

       
        {/*Returns  */}
        <li className="menu-item ">
          <div onClick={()=>props.sideMenuClick('distreturn')} className="menu-link">
            <i className="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="Analytics">Returns</div>
          </div>
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
                <div onClick={()=>props.sideMenuClick('Banner')} className="menu-link">
                  <div data-i18n="Without menu">Websites Banner</div>
                </div>
              </li>
              <li className="menu-item">
                <div onClick={()=>props.sideMenuClick('Banner')} className="menu-link">
                  <div data-i18n="Without navbar">App Banner</div>
                </div>
              </li>
              <li className="menu-item">
                <div onClick={()=>props.sideMenuClick('EditBanner')} className="menu-link">
                  <div data-i18n="Without navbar">profile Setting</div>
                </div>
              </li>
            </Dropdown.Menu>
            
          </Dropdown>
        </li>
      </ul>
    </aside>
  );
}
