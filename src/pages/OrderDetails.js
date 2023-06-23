import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function OrderDetails() {
  const authToken = localStorage.getItem("authToken");
  const [orderDetails, setOrderDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getOrderDetails(id);
  }, [authToken]);
  async function getOrderDetails(orderid) {
    await axios
      .get(`http://api.meddaily.in/order_details_admin?order_id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setOrderDetails(res?.data?.data);
        }
      })
      .catch((err) => {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      });
  }

  console.log(orderDetails);
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Navbar />

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card mb-12">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Order Details</h5>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <div className="container mt-4">
                        <h3 className="mb-3">Order Details</h3>
                        <hr />
                        <div className="row justify-content-center">
                          <div className="col-md-6">
                            <p>
                              <strong>Order ID:</strong> {orderDetails.order_id}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Order Date:</strong>{" "}
                              {new Date(
                                orderDetails.createdAt
                              ).toLocaleString()}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Order Status:</strong>{" "}
                              {orderDetails.order_status}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Payment Type:</strong>{" "}
                              {orderDetails.payment_type}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Total Price:</strong> {orderDetails.price}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Payment Status:</strong>{" "}
                              {orderDetails.payment_status}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                               <strong>Retailor-Address:</strong>{" "}
                               {orderDetails.retailer_address}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                               <strong>Distributor-Address:</strong>{" "}
                               {orderDetails.distributor_address}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-md-12">
                          <h4>Products:</h4>
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orderDetails &&
                                orderDetails.products &&
                                orderDetails.products.length > 0 &&
                                orderDetails.products.map((product, index) => (
                                  <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price.upDatePrice}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* </div> */}
    </>
  );
}
