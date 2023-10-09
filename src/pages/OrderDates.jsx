import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Ordertbody from "./Ordertbody";

const OrderDates = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [orderDates, setOrderDates] = useState([]);

  useEffect(() => {
    if (fromDate && toDate) {
      handleOrderDates();
    }
  }, [fromDate, toDate]);

  // const handleOrderDates = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.meddaily.in/all_order?from=${fromDate}&to=${toDate}`
  //     );
  //     if (res.status === 200) {
  //       setOrderDates(res?.data?.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleOrderDates = async () => {
    try {
      const res = await axios.get(
        `https://api.meddaily.in/all_order?createdAt[$gte]=${fromDate}&createdAt[$lte]=${toDate}`
      );
      if (res.status === 200) {
        setOrderDates(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(orderDates);
  const order =
    orderDates &&
    orderDates.length > 0 &&
    orderDates.map((item, i) => {
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

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Orders Filter By Dates</h5>
              </div>
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fromDate" className="form-label">
                      From Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fromDate"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="toDate" className="form-label">
                      To Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="toDate"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>
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

export default OrderDates;
