import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import config from "../appConfig";

export default function OrderDetails() {
  const authToken = localStorage.getItem("authToken");
  const [orderDetails, setOrderDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getOrderDetails(id);
  }, [authToken]);
  async function getOrderDetails(orderId) {
    const reqbody = {
      order_id: id,
    };
    const axiosconfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post(`http://13.235.8.138:81/order_detail`, reqbody, axiosconfig)
      .then((res) => {
        if (res.status === 200) {
          setOrderDetails(res?.data?.message);
        }
      })
      .catch((err) => {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      });
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
                      {/* <Card>
                        <Card.Header>
                          <h4>Order Details</h4>
                        </Card.Header>
                        <Card.Body>
                          <ListGroup variant="flush">
                            <ListGroupItem>
                              <h5>Order ID: {orderDetails.order_id}</h5>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>
                                Distributor ID: {orderDetails.distributor_id}
                              </p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Retailer ID: {orderDetails.retailer_id}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Price: ${orderDetails.price}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <h5>Products:</h5>
                              <ul>
                                {orderDetails &&
                                  orderDetails.length > 0 &&
                                  orderDetails.products.map((product) => (
                                    <li key={product.id}>
                                      <p>Product ID: {product.id}</p>
                                      <p>Name: {product.name}</p>
                                      <p>Price: ${product.price}</p>
                                    </li>
                                  ))}
                              </ul>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Order Status: {orderDetails.order_status}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>
                                Payment Status: {orderDetails.payment_status}
                              </p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Payment Type: {orderDetails.payment_type}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Time: {orderDetails.time}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Created At: {orderDetails.createdAt}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Updated At: {orderDetails.updatedAt}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                              <p>Return Status: {orderDetails.return_status}</p>
                            </ListGroupItem>
                          </ListGroup>
                        </Card.Body>
                      </Card> */}
                      {/* <div>
                        <h1>Order Details</h1>
                        <div>
                          <h3>Order ID: {orderDetails.order_id}</h3>
                          <p>Distributor ID: {orderDetails.distributor_id}</p>
                          <p>Retailer ID: {orderDetails.retailer_id}</p>
                          <p>Price: ${orderDetails.price}</p>
                          <h4>Products:</h4>
                          <ul>
                            {orderDetails && orderDetails.length>0 && orderDetails.products.map((product) => (
                              <li key={product.id}>
                                <p>Product ID: {product.id}</p>
                                <p>Name: {product.name}</p>
                                <p>Price: ${product.price}</p>
                              </li>
                            ))}
                          </ul>
                          <p>Order Status: {orderDetails.order_status}</p>
                          <p>Payment Status: {orderDetails.payment_status}</p>
                          <p>Payment Type: {orderDetails.payment_type}</p>
                          <p>Time: {orderDetails.time}</p>
                          <p>Created At: {orderDetails.createdAt}</p>
                          <p>Updated At: {orderDetails.updatedAt}</p>
                          <p>Return Status: {orderDetails.return_status}</p>
                        </div>
                      </div> */}
                      {/* {orderDetails &&
                        orderDetails.length > 0 &&
                        orderDetails.map((item, k) => [ */}
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
