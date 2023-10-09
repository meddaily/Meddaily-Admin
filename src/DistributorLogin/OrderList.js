import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import { Row, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import Loading from "../Loading/Loading";

export default function OrderList() {
  const authToken = localStorage.getItem("disToken");
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    getOrderDetails();
  }, [authToken]);

  async function getOrderDetails() {
    try {
      const response = await axios.get(
        `https://api.meddaily.in/distributor_get_product`,
        {
          headers: {
            token: `${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        setOrderDetails(response?.data?.product);
      }
    } catch (err) {
      toastr.error(err?.response?.data?.message);
      console.log(err);
    }
  }
  const MAX_DESCRIPTION_LENGTH = 50;

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
                    <div className="card-header d-flex justify-content-between align-items-center"></div>

                    <hr className="my-0" />
                    <div className="card-body">
                      <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                          <div className="card">
                            <h5 className="card-header float-start">
                              Order Table
                            </h5>
                            <div className="table-responsive text-nowrap">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Id</th>
                                    <th>img</th>
                                    <th>Describtion</th>
                                  </tr>
                                </thead>
                                {orderDetails && orderDetails.length > 0 ? (
                                  orderDetails.map((order, i) => {
                                    return (
                                      <>
                                        <tbody key={i}>
                                          <tr key={order._id}>
                                            <td>{order.title}</td>
                                            <td>{order._id}</td>
                                            <img
                                              src={order.image}
                                              alt="Product"
                                            />
                                            <td>
                                              {order.description.substring(
                                                0,
                                                MAX_DESCRIPTION_LENGTH
                                              ) + "..."}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </>
                                    );
                                  })
                                ) : (
                                  <tbody>
                                    <tr>
                                      <td
                                        colSpan="5"
                                        style={{ textAlign: "center" }}
                                      >
                                        <Loading />
                                      </td>
                                    </tr>
                                  </tbody>
                                )}
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="content-backdrop fade"></div>
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
      </div>
    </>
  );
}
