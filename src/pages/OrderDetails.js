import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function OrderDetails(props) {
  console.log("is coming",props)
  const authToken = localStorage.getItem("authToken");
  const [orderDetails, setOrderDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getOrderDetails(id);
  }, [authToken]);
  async function getOrderDetails(orderid) {
    await axios
      .get(`https://api.meddaily.in/order_details_admin?order_id=${id}`, {
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

  function getPaymentType(code) {
    if (code === 1) {
      return "COD";
    } else if (code === 2) {
      return "On Credit";
    } else if (code === 3) {
      return "Prepaid";
    }
  }

  function getOrderStatus(code) {
    if (code === 0) {
      return "Cancelled";
    } else if (code === 1) {
      return "Shipped";
    } else if (code === 3) {
      return "Delivered";
    } 
      else if (code === 4) {
      return "Order Placed";
    }
  }

  console.log(props.orderId.price);
  return (
    <>
      

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card mb-12">
                    
                    <hr className="my-0" />
                    <div className="card-body">
                      <div className="container mt-4">
                        <h3 className="mb-3">Order Details</h3>
                        <hr />
                        <div className="row justify-content-center">
                          <div className="col-md-6">
                            <p>
                              <strong>Order ID:</strong> {props.orderId.order_id}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Order Date:</strong>{" "}
                              {new Date(
                                props.orderId.createdAt
                              ).toLocaleString()}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Order Status:</strong>{" "}
                              {getOrderStatus(props.orderId.payment_status)}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Payment Type:</strong>{" "}
                              {getPaymentType(props.orderId.payment_type)}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Total Price:</strong> {props.orderId.price}
                            </p>
                          </div>
                          {/* <div className="col-md-6">
                            <p>
                              <strong>Payment Status:</strong>{" "}
                              {orderDetails.payment_status}
                            </p>
                          </div> */}
                          <div className="col-md-6">
                            <p>
                               <strong>Retailor-Name:</strong>{" "}
                               {props.orderId.retailer_name}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                               <strong>Distributor-Name:</strong>{" "}
                               {props.orderId.distributor_name}
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
                              {props &&
                                props.orderId.products &&
                                props.orderId.products.length > 0 &&
                                props.orderId.products.map((product, index) => (
                                  <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
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
         
    </>
  );
}
