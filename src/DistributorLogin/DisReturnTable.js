import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Loading from "../Loading/Loading";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DisReturnTable() {
  const authToken = localStorage.getItem("disToken");
  const [returnList, setReturnList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemValue,setItemValue]=useState();

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
        console.log("api response", response);
        var filterResponse = response.data.data.filter(f => f.return_status==1)
        setReturnList(filterResponse);
      }
    } catch (err) {
      toastr.error(err?.response?.data?.message);
      console.log(err);
    }
  }

  

  // // Function to open the modal
  // const openModal = (item) => {
  //   console.log("Opening modal for item: ", item);
  // setIsModalOpen(true);
  // setItemValue(item);
  // };

  // // Function to close the modal
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  console.log("return list", returnList?.data?.data);
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
                      {/* <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Vendor Name</th>
                            <th>Return Amount</th>
                            <th>Quantity</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {formattedData && formattedData.length > 0 ? (
                            <tr>
                              <td>
                                <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                {formattedData.order_id || "NA"}
                              </td>
                              <td>{formattedData.name || "NA"}</td>
                              <td>{formattedData.price || 0}</td>
                              <td>{formattedData.quantity || 0}</td>
                              <td>
                                <div className="dropdown">
                                  <Link className="dropdown-item" to="#" onClick={e=>{
                                    e.preventDefault();
                                    // viewReturnRequest(formattedData.)
                                    console.log("respond",formattedData.order_id)
                                  }}>
                                    {" "}
                                    View Full Details
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            // <Loading />
                            <>
                              <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                  <Loading />
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table> */}
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Vendor Name</th>
                            <th>Return Amount</th>
                            <th>Quantity</th>
                            <th>View More</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {returnList && returnList.length > 0 ? (
                            returnList.map((item) => (
                              <tr key={item.order_id}>
                                <td>
                                  <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                  {item.order_id || "NA"}
                                </td>
                                <td>{item.distributor_name || "NA"}</td>
                                <td>{item.price || 0}</td>
                                <td>{item.bonus_quantity || 0}</td>
                                <td>
                                  <div className="dropdown">
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                      onClick={(e) => {
                                        handleShow()
                                        // openModal(item)
                                        console.log("respond", item.order_id);
                                      }}
                                    >
                                      View Full Details
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <>
                              <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                  <Loading />
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
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
     {/* view details modal */}
     {/* {isModalOpen && (
     <div>
       <h3>
         Product Details
       </h3>
       <p >
         Order Id: {itemValue?.order_id}
       </p>
       <p >
         Expiry Date: {itemValue?.exp_date}
       </p>
       <p >
         Price : {itemValue?.price}
       </p>
       <p >
           Distributer and Retailer Details
       </p>
       <>
         Distributer Name : {itemValue?.distributor_name}
       </>
       <p>
         Retailer Name : {itemValue?.retailer_name}
       </p>
       <hr />
       <p>
           Payment Details
       </p>
       <p>
         Payment Status : {itemValue?.payment_status}
       </p>
       <p>
         Payment Type : {itemValue?.payment_type}
       </p>
       <p>
         Order Status: {itemValue?.order_status}
       </p>
       <p>
           Payment Details
       </p>
       <p>
         Return Reason: {itemValue?.return_reason}
       </p>
       <p>
         Return Message: {itemValue?.return_message}
       </p>
       <p>
         Return Quantity: {itemValue?.return_quantity}
       </p>
       <p>
         Return Status: {itemValue?.return_status}
       </p>
       <div>
       
       </div>
       
     </div>
)} */}

<Modal show={show} onHide={handleClose} >
        {/* <Modal.Header closeButton>
          <Modal.Title>Return Item Details</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <div>
       <h3>
         Product Details
       </h3>
       <p >
         Order Id: {itemValue?.order_id}
       </p>
       <p >
         Expiry Date: {itemValue?.exp_date}
       </p>
       <p >
         Price : {itemValue?.price}
       </p>
       <p >
           Distributer and Retailer Details
       </p>
       <>
         Distributer Name : {itemValue?.distributor_name}
       </>
       <p>
         Retailer Name : {itemValue?.retailer_name}
       </p>
       <hr />
       <p>
           Payment Details
       </p>
       <p>
         Payment Status : {itemValue?.payment_status}
       </p>
       <p>
         Payment Type : {itemValue?.payment_type}
       </p>
       <p>
         Order Status: {itemValue?.order_status}
       </p>
       <p>
           Payment Details
       </p>
       <p>
         Return Reason: {itemValue?.return_reason}
       </p>
       <p>
         Return Message: {itemValue?.return_message}
       </p>
       <p>
         Return Quantity: {itemValue?.return_quantity}
       </p>
       <p>
         Return Status: {itemValue?.return_status}
       </p>
       
       
     </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

    </>
  );
}
