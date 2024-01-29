import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import config from "../appConfig";

export default function OrderDetails(props) {
  const authToken = localStorage.getItem("authToken");
  const [orderDetails, setOrderDetails] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getOrderDetails(props.orderId.order_id);
  }, [authToken]);
  async function getOrderDetails(orderid) {
    console.log("is coming",orderid)
    await axios
      .get(`${config.backendURL}/order_details_admin?order_id=${orderid}`, {
      // .get(`http://localhost:8000/order_details_admin?order_id=${orderid}`, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setOrderDetails(res?.data?.data);
          console.log(">>>>>>>>>>",res);
        }
      })
      .catch((err) => {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      });
  }

  function getPaymentType(code) {
    if (code === 1) {
      return "Cash on delivery";
    } else if (code === 2) {
      return "Payment pripaid";
    } else if (code === 3) {
      return "Craadit";
    }
  }

  function getOrderStatus(code) {
    if (code === 0) {
      return "Cancelled";
    } else if (code === 1) {
      return "Shipped";
    } else if (code === 3) {
      return "Delivered";
    } else if (code === 4) {
      return "Order Placed";
    }else if (code === 5) {
      return "Order Return";
    }
  }

  // console.log(orderDetails.price);
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
                              <strong>Order ID:</strong> {orderDetails?.order_id}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Order Date:</strong>{" "}
                              {new Date(
                                orderDetails?.createdAt
                              ).toLocaleString()}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Order Status:</strong>{" "}
                              {getOrderStatus(orderDetails?.order_status)}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Payment Type:</strong>{" "}
                              {getPaymentType(orderDetails?.payment_type)}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              <strong>Total Price:</strong> {orderDetails?.price}
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
                               {orderDetails?.retailer_name}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                               <strong>Retailor-Address:</strong>{" "}
                               {orderDetails?.retailer_address}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                               <strong>Distributor-Name:</strong>{" "}
                               {orderDetails?.distributor_name}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                               <strong>Distributor-Address:</strong>{" "}
                               {orderDetails?.distributor_address}
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
                                orderDetails?.products &&
                                orderDetails?.products.length > 0 &&
                  
                                orderDetails?.products.map((product, index) => (

                                  <tr key={index}>
                                    <td>{product?.name}</td>
                                    <td>{product?.quantity}</td>
                                    <td>{product?.price}</td>
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
