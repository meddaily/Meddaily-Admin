import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import { Row, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Navbar from "../pages/Navbar";

export default function OrderDetails() {
  const authToken = localStorage.getItem("disToken");
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    getOrderDetails();
  }, [authToken]);

  // async function getOrderDetails() {
  //   try {
  //     const response = await fetch(
  //       "http://13.235.8.138:81/distributor_get_product",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjp7Il9pZCI6IjY0ODA4MTZhN2Y4ZTE5OWNiYWU3ZmEzMiIsImZpcnN0bmFtZSI6InNhbSIsImxhc3RuYW1lIjoic2FtbXkiLCJwaG9uZW51bWJlciI6Ijk5ODg3NzY2NTUiLCJlbWFpbCI6InNhbUBnbWFpbC5jb20iLCJwaW5jb2RlIjoiMTIzNDUiLCJjaXR5IjoiSHlkIiwiYXJlYSI6Ikh5ZCIsInN0YXRlIjoiVGVsYW5nYW5hIiwicGFzc3dvcmQiOiIxMjM0NTY3ODkiLCJkaXN0cmlidXRvcmNvZGUiOiJBQkMxMjMiLCJkaXN0cmlidXRvcnR5cGUiOiJHZW5lcmljIERpc3RyaWJ1dG9yIiwidmVyaWZ5IjoidHJ1ZSIsIm90cCI6MCwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wN1QxMzowODo1OC43MzJaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wN1QxMzoyMDozMC4zNThaIiwiX192IjowfSwiaWF0IjoxNjg2MTQ0MTQ3LCJleHAiOjE2ODYxNTEzNDd9.oY3Cmst9vLMzh8Arr5JyvGRfB6NZD_DNvQ7igkf_sdk`,
  //         },
  //       }
  //     );
  //     console.log("authToken", authToken);
  //     console.log("response", response);

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("data", data);
  //       setOrderDetails(data?.message);
  //       console.log("data.message", data.message);
  //     } else {
  //       const data = await response.json();
  //       toastr.error(data?.message);
  //       console.log(data);
  //     }
  //   } catch (err) {
  //     toastr.error("Error fetching order details");
  //     console.error(err);
  //   }
  // }

  async function getOrderDetails() {
    try {
      const response = await axios.get(
        `http://13.235.8.138:81/distributor_get_product`,
        {
          headers: {
           Authorization: `${authToken}`,
          },
        }
      );
      console.log("authToken", authToken);

      debugger;
      if (response.status === 200) {
        setOrderDetails(response?.data?.message);
        console.log(response.data.message);
      }
    } catch (err) {
      toastr.error(err?.response?.data?.message);
      console.log(err);
    }
  }

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
                      <Container
                        style={{ marginBottom: "2em", textAlign: "left" }}
                      >
                        <div
                          // key={k.toString()}
                          style={{ marginBottom: "1em" }}
                        >
                          <Row>
                            <Col>
                              <Form.Group>
                                <Form.Label>Order Id</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Disabled input"
                                  aria-label="Disabled input example"
                                  value={orderDetails.order_id || "NA"}
                                  disabled
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group>
                                <Form.Label>Product Id</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Disabled input"
                                  aria-label="Disabled input example"
                                  value={
                                    orderDetails.products &&
                                    orderDetails.products.length > 0
                                      ? orderDetails.products[0].id
                                      : "NA"
                                  }
                                  disabled
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group>
                                <Form.Label>Quantity</Form.Label>

                                <Form.Control
                                  type="text"
                                  placeholder="Disabled input"
                                  aria-label="Disabled input example"
                                  value={orderDetails.order_status || "NA"}
                                  disabled
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        <div>
                          <Row>
                            <Col>
                              <Form.Group>
                                <Form.Label>Total price</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Disabled input"
                                  aria-label="Disabled input example"
                                  value={orderDetails.price || "NA"}
                                  disabled
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group>
                                <Form.Label>User Id</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Disabled input"
                                  aria-label="Disabled input example"
                                  value={
                                    orderDetails.products &&
                                    orderDetails.products.length > 0
                                      ? orderDetails.products[0].name
                                      : "NA"
                                  }
                                  disabled
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group>
                                <Form.Label>User Type</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Disabled input"
                                  aria-label="Disabled input example"
                                  value={orderDetails.payment_type || "NA"}
                                  disabled
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                      ,{/* ])} */}
                      {/* <div class="col-12">
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{
                            backgroundColor: "Darkblue",
                            border: "Darkblue",
                          }}
                        >
                          Approve and add
                        </button>
                      </div> */}
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
