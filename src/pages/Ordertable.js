import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Ordertbody from "./Ordertbody";
import config from "../appConfig";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MDBDataTable } from "mdbreact";
import OrderDetails from "./OrderDetails";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Ordertable() {
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedOrderID, setSelectedOrderID] = useState(null);
  const authToken = localStorage.getItem("authToken");
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    handleOrders();
  }, [authToken]);

  const handleOrders = async () => {
    try {
      const response = await axios.get(`${config.backendURL}/all_order`);
      if (response.status === 200) {
        setOrderList(response?.data?.data);
        // console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelivery = async (_id) => {
    try {
      const response = await axios.post(
        `${config.backendURL}/order_status_change`,
        {
          order_id: _id,
          status: 3,
        }
      );
      console.log("NEW", _id);
      if (response.status === 200) {
        toastr.success("Order status updated successfully");
        handleOrders(); // Refresh the order list after status change
      }
    } catch (error) {
      toastr.error("Error updating order status");
      console.error(error);
    }
  };
  const handleViewModal = async (item) => {
    setSelectedOrderID(item);
    setDetailsModalOpen(true);
  };

  const columns = [
    {
      label: "Order ID",
      field: "orderId",
      sort: "asc",
    },
    {
      label: "Retailer Name",
      field: "userType",
      sort: "asc",
    },
    {
      label: "Distributor Name",
      field: "userId",
      sort: "asc",
    },
    {
      label: "Total Price",
      field: "price",
      sort: "asc",
    },
    {
      label: "Status",
      field: "status",
      sort: "asc",
    },
    {
      label: "Payment Type",
      field: "paymenttype",
      sort: "asc",
    },
    {
      label: "Details",
      field: "details",
    },
    {
      label: "Mark Delivered",
      field: "markDelivered",
    },
  ];

  const rows = orderList.map((item, i) => ({
    orderId: item.order_id,
    userType: item.retailer_name,
    userId: item.distributor_name,
    price: item.price,
    status: item.order_status == 5 ? 'Order Return' : "" || item.order_status == 4 ? 'Order Placed' : "" || item.order_status == 1 ? 'Order Shipped' : "" || item.order_status == 3 ? 'Order Delivered' : "" || item.order_status == 0 ? 'Order Cancel' : "",
    paymenttype: item.payment_type === 1
      ? "Cash on delivery"
      : item?.payment_type === 2
        ? "Payment prepaid"
        : item?.payment_type === 3
          ? "Credit"
          : "",
    details: (
      <button
        className="btn btn-success"
        style={{ backgroundColor: "#6EAFAB" }}
        // variant="success"
        onClick={() => {
          handleViewModal(item);
          setDetailsModalOpen(true)
        }}
      >
        View Details
      </button>
    ),
    markDelivered: (
      <>
        {item.order_status === 1 && (
          <button
            className="btn btn-success"
            style={{ backgroundColor: "#6EAFAB" }}
            onClick={() => {
              if (item.order_status === 1) {
                handleDelivery(item._id);
              }
            }}
          >
            Mark Delivered
          </button>
        )}
      </>
    )
    // markDelivered: (
    //   // <button
    //   //   className="btn btn-primary"
    //   //   onClick={() => {
    //   //     handleDelivery(item._id);
    //   //   }}
    //   // >
    //   //   Mark Delivered
    //   // </button>
    //   <button
    //     className="btn btn-primary"
    //     onClick={() => {
    //       if (item.order_status === 1) {
    //         handleDelivery(item._id);
    //       }
    //     }}
    //   disabled={item.order_status === 3}
    //   >
    //     Mark Delivered
    //   </button>
    // ),
  }));

  const handleDownload = async (type, value) => {
    try {
      const response = await axios.get(`${config.backendURL}/get_all_report`, {
        params: { type, value, startDate: fromDate, endDate: toDate },
        responseType: 'blob',
      });

      if (response.status === 200) {

        const url = window.URL.createObjectURL(new Blob([response.data]));

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Order Data.xlsx');
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />

            <div className="container">
              {/* Filter Button  */}

              <div className="card-header d-flex justify-content-end align-items-center">

                <h5 className="mb-0"></h5>

                <div className="btn-group">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    variant="text"
                    style={{ backgroundColor: "#6EAFAB", color: "white" }}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filters
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/orderdates" className="dropdown-item">
                        Filter by date
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderidfilter" className="dropdown-item">
                        Order Id
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderdisid" className="dropdown-item">
                        Distributor id
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="btn-group " style={{ marginLeft: "20px" }}>
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    variant="text"
                    style={{ backgroundColor: "#6EAFAB", color: "white" }}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Download Orders
                  </button>
                  <ul className="dropdown-menu">
                    <li onClick={() => handleDownload('delivery_fee', true)}>
                      <Link className="dropdown-item">
                        Download order with delivery fee
                      </Link>
                    </li>
                    <li onClick={() => handleDownload('order_status', 4)}>
                      <Link className="dropdown-item">
                        Download order with order placed
                      </Link>
                    </li>
                    <li onClick={() => handleDownload('return_status', 3)}>
                      <Link className="dropdown-item">
                        Download order with return placed
                      </Link>
                    </li>
                    <li onClick={() => handleDownload('order_status', 3)}>
                      <Link className="dropdown-item">
                        Download order with order rejected
                      </Link>
                    </li>
                    <li onClick={() => handleDownload('order_status', 0)}>
                      <Link className="dropdown-item">
                        Download order with order cancelled
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">Order Table</h5>
                    <div className="card-body">
                      <div className="row mb-3">
                        <label
                          htmlFor="fromDate"
                          className="col-sm-2 col-form-label text-end"
                        >
                          From Date:
                        </label>
                        <div className="col-sm-4">
                          <input
                            type="date"
                            id="fromDate"
                            className="form-control"
                            onChange={(e) => setFromDate(e.target.value)}
                            value={fromDate}
                          />
                        </div>
                        <label
                          htmlFor="toDate"
                          className="col-sm-2 col-form-label text-end"
                        >
                          To Date:
                        </label>
                        <div className="col-sm-4">
                          <input
                            type="date"
                            id="toDate"
                            className="form-control"
                            onChange={(e) => setToDate(e.target.value)}
                            value={toDate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive text-nowrap">
                      <MDBDataTable
                        striped
                        bordered
                        hover
                        data={{ columns, rows }}
                        responsive
                        noBottomColumns={true}
                      />
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
      {/* <Button variant="primary" onClick={handleShow}>
        View Order Details 
      </Button> */}

      {isDetailsModalOpen && (
        <Modal show={isDetailsModalOpen} onHide={() => setDetailsModalOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Order Details</Modal.Title>
          </Modal.Header>
          <Modal.Body><OrderDetails orderId={selectedOrderID} /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDetailsModalOpen(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
