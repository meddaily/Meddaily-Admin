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

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    handleOrders();
  }, [authToken]);

  const handleOrders = async () => {
    try {
      const response = await axios.get("https://api.meddaily.in/all_order");
      if (response.status === 200) {
        setOrderList(response?.data?.message);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelivery = async (orderid) => {
    try {
      const response = await axios.post(
        "https://api.meddaily.in/order_status_change",
        {
          order_id: orderid,
          status: 3,
        }
      );
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
      label: "Details",
      field: "details",
    },
    {
      label: "Mark Delivered",
      field: "markDelivered",
    },
  ];

  const rows = orderList.map((item, i) => ({
    orderId: item._id,
    userType: item.retailer_name,
    userId: item.distributor_name,
    price: item.price,
    status: item.order_status,
    details: (
      <button
        className="btn btn-primary"
        onClick={() => {
          handleViewModal(item);
          setDetailsModalOpen(true)
        }}
      >
        View Details
      </button>
    ),
    markDelivered: (
      <button
        className="btn btn-primary"
        onClick={() => {
          handleDelivery(item.order_id);
        }}
      >
        Mark Delivered
      </button>
    ),
  }));

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
              </div>

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">Order Table</h5>
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
