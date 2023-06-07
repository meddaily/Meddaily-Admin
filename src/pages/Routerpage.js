import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashbord from "./Dashbord";
import Adddis from "./Adddis";
import Addret from "./Addret";
import Distributordetails from "./Distributordetails";
import Distributordetailsr from "./Distributordetailsr";
import Distributorlist from "./Distributorlist";
import Distributorrequest from "./Distributorrequest";
import Retailerdetails from "./Retailerdetails";
import Retailerdetailsr from "./Retailerdetailsr";
import Retailerlist from "./Retailerlist";
import Retailerrequest from "./Retailerrequest";
import Sidebar from "./Sidebar";
import Gstinfo from "./Gstinfo";
import Producttable from "./Producttable";
import Addproduct from "./Addproduct";
import Addbul from "./Addbul";
import Ordertable from "./Ordertable";
import OrderDetails from "./OrderDetails";
import UpdateOrder from "./UpdateOrder";
import Navbar from "./Navbar";
import Updateproduct from "./Updateporduct";
import Offers from "./Offers";
import Returntable from "./Returntable";
import Payouttable from "./Payouttable";
import CategoryList from "./CategoryList";
import AddNewCategory from "./AddNewCat";
// distributor
import DistDashboard from "../DistributorLogin/DistDashboard";
import OrderList from "../DistributorLogin/OrderList";
import DisReturnTable from "../DistributorLogin/DisReturnTable";
import MyInventory from "../DistributorLogin/MyInventory";
import AddNewInventory from "../DistributorLogin/AddNewInventory";
import BulkUploadInv from "../DistributorLogin/BulkUploadInv"
import ListNewProductInv from "../DistributorLogin/ListNewProductInv"

export default function Routerpage() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashbord} />
          {/* dislogin */}
          <Route exact path="/distdashboard" component={DistDashboard} />
          {/* admin */}
          <Route path="/adddis" component={Adddis} />
          <Route path="/addret" component={Addret} />
          <Route path="/distributordetails" component={Distributordetails} />
          <Route path="/distributordetailsr" component={Distributordetailsr} />
          <Route path="/distributorlist" component={Distributorlist} />
          <Route path="/distributorrequest" component={Distributorrequest} />
          <Route path="/retailerdetails" component={Retailerdetails} />
          <Route path="/retailerdetailsr" component={Retailerdetailsr} />
          <Route path="/retailerlist" component={Retailerlist} />
          <Route path="/retailerrequest" component={Retailerrequest} />
          <Route path="/sidebar" component={Sidebar} />
          <Route path="/gstinfo" component={Gstinfo} />
          <Route path="/producttable" component={Producttable} />
          <Route path="/addproduct" component={Addproduct} />
          <Route path="/addbul" component={Addbul} />
          <Route path="/ordertable" component={Ordertable} />
          <Route path="/orderdetails/:id" component={OrderDetails} />
          <Route path="/updateorder/:id" component={UpdateOrder} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/updateproduct" component={Updateproduct} />
          <Route path="/offer" component={Offers} />
          <Route path="/returntable" component={Returntable} />
          <Route path="/payouttable" component={Payouttable} />
          <Route path="/categorylist" component={CategoryList} />
          <Route path="/addnewcategory" component={AddNewCategory} />
          <Route path="/payouttable" component={Payouttable} />
          {/* distributor */}
          <Route path="/orderlist" component={OrderList} />
          <Route path="/distreturn" component={DisReturnTable} />
          <Route path="/myinventory" component={MyInventory} />
          <Route path="/addnewinv" component={AddNewInventory} />
          <Route path="/bulkuploadinv" component={BulkUploadInv} />
          <Route path="/listnewinv" component={ListNewProductInv} />
          
        </Switch>
      </Router>
    </>
  );
}
