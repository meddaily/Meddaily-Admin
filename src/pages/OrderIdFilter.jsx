import React from "react";
import Ordertbody from "./Ordertbody";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";

const OrderIdFilter = () => {
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);

  const handleOrderSearch = async () => {
    try {
      const res = await axios.get(`https://api.meddaily.in/all_order`);
      if (res.status === 200) {
        const filteredOrders = res.data.message.filter(
          (item) => item.order_id === orderId
        );
        setOrders(filteredOrders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const order =
    orders &&
    orders.length > 0 &&
    orders.map((item, i) => {
      return (
        <Ordertbody
          id={item._id}
          orderId={item.order_id}
          userType={item.userType}
          userId={item.userId}
          price={item.price}
          details={"View Full details"}
          //   deleteOrder={deleteOrder}
        />
      );
    });
  console.log(orders);
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Search By Order Id</h5>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 mx-2">
                  <label
                    htmlFor="orderid"
                    className="form-label float-start mx-5"
                  >
                    Order Id:
                  </label>
                  <input
                    type="text"
                    name="orderid"
                    id="orderid"
                    placeholder="Enter Order Id"
                    className="form-control mx-5"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                  />
                </div>
                <div className="col-md-4 mt-4 mx-0">
                  <button
                    className="btn btn-primary"
                    onClick={handleOrderSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row mb-3"></div>
                <h5 className="card-header">Order Table</h5>

                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order id</th>
                        <th>Retailer name</th>
                        <th>Distributor Name</th>
                        <th>Total Price</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    {order}
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="content-backdrop fade"></div>
        </div>
      </div>
    </>
  );
};

export default OrderIdFilter;
