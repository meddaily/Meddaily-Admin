import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";

export default function UpdateOrder() {
  const authToken = localStorage.getItem("authToken");
  const [orderDetails, setOrderDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    getOrderDetails(params.id);
  }, [authToken]);

  async function getOrderDetails(orderId) {
    await axios
      .get(`http://api.meddaily.in/cancel_order_admin?order_id=${orderId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setOrderDetails(res.data.data);
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        toastr.error(err.response.data.message);
        console.log(err);
      });
  }
  function handle(e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    const orderObj = Object.assign([], orderDetails);
    orderObj[0][name] = value;
    setOrderDetails(orderObj);
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
                      <h5 className="mb-0">Update Order</h5>
                    </div>

                    <hr className="my-0" />
                    <div className="card-body">
                      {orderDetails && orderDetails.length > 0 ? (
                        orderDetails.map((item, k) => [
                          <Container
                            style={{ marginBottom: "2em", textAlign: "left" }}
                          >
                            <div
                              key={k.toString()}
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
                                      value={item.orderId || "NA"}
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
                                      value={item.productId || "NA"}
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
                                      value={item.quantity || "NA"}
                                      name="quantity"
                                      onChange={handle}
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
                                      value={item.totalPrice || "NA"}
                                      name="totalPrice"
                                      onChange={handle}
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
                                      value={item.userId || "NA"}
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
                                      value={item.userType || "NA"}
                                      disabled
                                      readOnly
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </div>
                            <div class="col-12">
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
                            </div>
                          </Container>,
                        ])
                      ) : (
                        <p>cannot cancel or not found</p>
                      )}
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
