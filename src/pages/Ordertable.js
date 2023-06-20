import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Orderdata from "./Orderdata";
import Ordertbody from "./Ordertbody";
import config from "../appConfig";

export default function Ordertable() {
  const authToken = localStorage.getItem("authToken");

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    // getAllOrders();
    handleOrders();
  }, [authToken]);

  const handleOrders = async () => {
    try {
      const response = await axios.get("http://api.meddaily.in/all_order");
      if (response.status === 200) {
        setOrderList(response?.data?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // async function getAllOrders() {
  //   await axios
  //     .get(`http://13.235.8.138:81/all_order`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setOrderList(res.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       toastr.error(err.response.data.message);
  //       console.log(err);
  //     });
  // };

  async function deleteOrder(event, orderId) {
    event.preventDefault();
    console.log(orderId);
    await axios
      .delete(`${config.backendURL}/orders/delete-order`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          orderId: orderId,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toastr.success(res.data.message);
          // getAllOrders();
          handleOrders();
        }
      })
      .catch((err) => {
        toastr.error(err.response.data.message);
        console.log(err);
      });
  }

  const order =
    orderList &&
    orderList.length > 0 &&
    orderList.map((item, i) => {
      return (
        <Ordertbody
          id={item._id}
          orderId={item.order_id}
          userType={item.userType}
          userId={item.userId}
          price={item.price}
          details={"View Full details"}
          deleteOrder={deleteOrder}
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
              {/* Filter Button  */}
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0"></h5>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filters
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Filter by date
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Order id
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Distributor id
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">Order Table</h5>
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

                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>

          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      </div>
    </>
  );
}
