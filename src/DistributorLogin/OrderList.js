import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import { Row, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Navbar from "../pages/Navbar";

export default function OrderDetails() {
  const authToken = localStorage.getItem("authToken");
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    getOrderDetails();
  }, [authToken]);

  async function getOrderDetails() {
    try {
      const response = await axios.get(
        `http://13.235.8.138:81/distributor_order`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // console.log("authToken", authToken);

      // debugger;
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
