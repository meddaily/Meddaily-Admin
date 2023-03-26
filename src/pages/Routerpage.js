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
import Navbar from "./Navbar";
import Updateproduct from "./Updateporduct";
import Offers from "./Offers";
import Returntable from "./Returntable";
import Payouttable from "./Payouttable";


export default function Routerpage() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashbord} />
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
          <Route path="/navbar" component={Navbar} />
          <Route path="/updateproduct" component={Updateproduct} />
          <Route path="/offer" component={Offers} />
          <Route path="/returntable" component={Returntable} />
          <Route path="/payouttable" component={Payouttable} />
         
        </Switch>
      </Router>
    </>
  );
}
