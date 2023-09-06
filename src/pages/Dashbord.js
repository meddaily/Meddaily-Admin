import React, { useEffect } from "react";
import { Link} from "react-router-dom";
// import Growthchart from "./charts/Growthchart";
// import Incomechart from "./charts/Incomechart";
// import OrderStatisticsChart from "./charts/OrderStatisticsChart";
// import Profilereportchart from "./charts/Profilereportchart";
// import Totalrevenuechart from "./charts/Totalrevenuechart";
import Navbar from "./Navbar";
import toastr from "toastr";
import axios from "axios";

import Sidebar from "./Sidebar";
// import Expensesofweek from "./charts/Expensesofweek";
import MainDashbord from "./MainDashbord";
import { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import OrderList from "../DistributorLogin/OrderList";
import MyInventory from "../DistributorLogin/MyInventory";
import Addbul from "../DistributorLogin/BulkUploadInv";
import ListNewProductinv from "../DistributorLogin/ListNewProductInv";
import AddNewInventory from "../DistributorLogin/AddNewInventory";
import Offer from "./Offers";
import Returntable from "./Returntable";
import Banner from "./Banner";
import EditBanner from "./EditBanner";
import Payouttable from "./Payouttable";

const apiUrl='https://api.meddaily.in/distributor_profile'

export default function Dashbord() {

  const [activeMenu,setactiveMenu]= useState('dashbord');
  const token = localStorage.getItem("authToken");

  useEffect(()=>{
    distributorProfile();

  },[])
  
  
  async function distributorProfile() {
    const authaxios = axios.create({
      baseURL:apiUrl,
      headers:{
        token:token
      },
    })
      
    await authaxios
      .get()
      .then((res) => {
        console.log(res,'res');
        if (res.data.status === true) {
          console.log(res,'respone true');
        } else {
          toastr.error(res?.data?.message);
        }
      })
      .catch((err) => {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      });
  }

  const sideMenuClick=(selected)=>{
    window.history.pushState(null, '', selected);
    setactiveMenu(selected);
  }
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar sideMenuClick={sideMenuClick}/>
          <div className="layout-page">
          <Navbar />

            {activeMenu ==='dashbord' && <MainDashbord/>}
            {activeMenu ==='orders' && <OrderList/>}
            {activeMenu === 'myinventory' && <MyInventory/>}
            {activeMenu === 'bulkuploadinv' && <Addbul/>}
            {activeMenu === 'listnewinv' && <ListNewProductinv/>}
            {activeMenu === 'addnewinv' && <AddNewInventory/>}
            {activeMenu === 'offers' && <Offer/>}
            {activeMenu === 'distreturn' && <Returntable/>}
            {activeMenu === 'Banner' && <Banner/>}
            {activeMenu === 'EditBanner' && <EditBanner/>}
            {activeMenu === 'Payouttable' && <Payouttable/>}
            
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
}
