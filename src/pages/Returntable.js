import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import config from "../appConfig";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MDBDataTable } from 'mdbreact';

export default function Returntable() {
  const authToken = localStorage.getItem('authToken');

  const [returnList, setReturnList] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemValue, setItemValue] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // if (fromDate && toDate) {
    getAllReturns();
    // }
  }, [fromDate, toDate]);

  async function getAllReturns() {
    try {
      const response = await axios.get(
        `https://api.meddaily.in/get_return_admin?from=${fromDate}&to=${toDate}`
      );
      if (response.status === 200) {
        console.log("RESpo", response);
        setReturnList(response?.data?.data);
      }
    } catch (err) {
      toastr.error(err.response.data.message);
      console.log(err);
    }
  }

  console.log(returnList);

  const handleFromDateChange = (event) => {
    console.log(">>>>", event.target.value);
    const currentTime = new Date();
    const hours = currentTime.getUTCHours().toString().padStart(2, '0');
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentTime.getUTCMilliseconds().toString().padStart(3, '0');
    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    const dateTimeString = `${event.target.value}T${timeString}Z`;
    setFromDate(dateTimeString);
  };

  const handleToDateChange = (event) => {
    const currentTime = new Date();
    const hours = currentTime.getUTCHours().toString().padStart(2, '0');
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentTime.getUTCMilliseconds().toString().padStart(3, '0');
    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    const dateTimeString = `${event.target.value}T${timeString}Z`;
    setToDate(dateTimeString);
  };

  const columns = [
    {
      label: 'Order ID',
      field: 'order_id',
      sort: 'asc',
    },
    {
      label: 'Vendor Name',
      field: 'name',
      sort: 'asc',
    },
    {
      label: 'Return Amount',
      field: 'price',
      sort: 'asc',
    },
    {
      label: 'Quantity',
      field: 'order_status',
      sort: 'asc',
    },
    {
      label: 'Payment Type',
      field: 'payment_type',
      sort: 'asc',
    },
    {
      label: 'View More',
      field: 'view_more',
    },
  ];

  const rows = returnList.map((item, i) => ({
    order_id: (
      <>
        <i className="fab fa-angular fa-lg text-danger me-3"></i>{' '}
        {item.order_id || 'NA'}
      </>
    ),
    name: item.name || 'NA',
    price: item.price || 0,
    order_status: item.order_status || 0,
    payment_type: item.payment_type == 1 ? 'COD' : "" || item.payment_type == 2 ? 'On Credit' : "" || item.payment_type == 0 ? 'Prepaid' : "",
    view_more: (
      <div className="dropdown">
        <Link
          className="dropdown-item"
          to="#"
          onClick={(e) => {
            setItemValue(item);
            handleShow();
          }}
        >
          View Full Details
        </Link>
      </div>
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
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header">Return Table</h5>
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
                            onChange={handleFromDateChange}
                            value={fromDate.split('T')[0]}
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
                            onChange={handleToDateChange}
                            value={toDate.split('T')[0]  }
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

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <h3>Product Details</h3>
            <p>Order Id: {itemValue?.order_id}</p>
            <p>Expiry Date: {itemValue?.exp_date}</p>
            <p>Price: {itemValue?.price}</p>
            <p>Distributor and Retailer Details</p>
            <p>Distributor Name: {itemValue?.distributor_name}</p>
            <p>Retailer Name: {itemValue?.retailer_name}</p>
            <hr />
            <p>Payment Details</p>
            <p>Payment Status: {itemValue?.payment_status}</p>
            <p>Payment Type: {itemValue?.payment_type == 1 ? "COD" : ''} {itemValue?.payment_type == 2 ? "On Credit" : ''} {itemValue?.payment_type == 0 ? "Prepaid" : ''}</p>
            <p>Order Status: {itemValue?.order_status == 4 ? "Order Placed" : ""} {itemValue?.order_status == 1 ? "Order Shipped" : ""} {itemValue?.order_status == 3 ? "Order Delivered" : ""}</p>
            <p>Payment Details</p>
            <p>Return Reason: {itemValue?.return_reason}</p>
            <p>Return Message: {itemValue?.return_message}</p>
            <p>Return Quantity: {itemValue?.return_quantity}</p>
            <p>Return Status: {itemValue?.return_status == 1 ? "Not Accepted" : ""} {itemValue?.return_status == 2 ? "Accepted" : ""}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}