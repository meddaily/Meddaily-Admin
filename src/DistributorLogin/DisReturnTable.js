import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Loading from "../Loading/Loading";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MDBDataTable } from 'mdbreact';

export default function DisReturnTable() {
  const authToken = localStorage.getItem('disToken');
  const [returnList, setReturnList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemValue, setItemValue] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllReturns();
  }, [authToken]);

  async function getAllReturns() {
    try {
      const response = await axios.get(
        `https://api.meddaily.in/return_order_request`,
        {},
        {
          headers: {
            token: `${authToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('api response', response);
        var filterResponse = response.data.data.filter(
          (f) => f.return_status == 1
        );
        setReturnList(filterResponse);
      }
    } catch (err) {
      toastr.error(err?.response?.data?.message);
      console.log(err);
    }
  }

  const columns = [
    {
      label: 'Order ID',
      field: 'order_id',
      sort: 'asc',
    },
    {
      label: 'Vendor Name',
      field: 'distributor_name',
      sort: 'asc',
    },
    {
      label: 'Return Amount',
      field: 'price',
      sort: 'asc',
    },
    {
      label: 'Quantity',
      field: 'bonus_quantity',
      sort: 'asc',
    },
    {
      label: 'View More',
      field: 'view_more',
    },
  ];

  const rows = returnList.map((item) => ({
    order_id: (
      <>
        <i className="fab fa-angular fa-lg text-danger me-3"></i>{' '}
        {item.order_id || 'NA'}
      </>
    ),
    distributor_name: item.distributor_name || 'NA',
    price: item.price || 0,
    bonus_quantity: item.bonus_quantity || 0,
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
            <p>Payment Type: {itemValue?.payment_type}</p>
            <p>Order Status: {itemValue?.order_status}</p>
            <p>Payment Details</p>
            <p>Return Reason: {itemValue?.return_reason}</p>
            <p>Return Message: {itemValue?.return_message}</p>
            <p>Return Quantity: {itemValue?.return_quantity}</p>
            <p>Return Status: {itemValue?.return_status}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}