import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import config from "../appConfig";
import { Button } from "react-bootstrap";

export default function Payouttable() {
  const authToken = localStorage.getItem("authToken");
  const [filter, setFilter] = useState('All');
  const [payoutList, setPayoutList] = useState([]);
  // const [payout, setPayout] = useState('');
  const [acceptedPayouts, setAcceptedPayouts] = useState([]);

  useEffect(() => {
    getAllPayout();
  }, [authToken, filter]);

  async function getAllPayout() {
    await axios
      .get(`${config.backendURL}/all_payout_request/${filter}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.message);
          setPayoutList(res.data.message);
        }
      })
      .catch((err) => {
        toastr.error(err.response.data.message);
        console.log(err);
      });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  const Acceptpayout = async (requestId) => {
    try {
      const payload={
        payout_id:requestId
      }
      const response = await axios.post(`${config.backendURL}/accept_payout`,payload);
      if (response.status === 200) {
        setAcceptedPayouts([...acceptedPayouts, requestId]);
        console.log(response.data);
        window.location.reload();
      }
    } catch (err) {
      toastr.error(err.response?.data?.message);
      console.log(err);
    }
  };
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
                    <div style={{ display: "flex", justifyContent:"space-between"}}>
                      <div></div>
                      <h5 className="card-header">Payout Request</h5>
                      <button
                        type="button"
                        className="btn dropdown-toggle"
                        style={{ backgroundColor: "#6EAFAB", color: "white", margin: "17px 0px " }}
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        Filter By
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={() => handleFilterChange('All')}
                          >
                            All
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={() => handleFilterChange('1')}
                          >
                            pending request
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={() => handleFilterChange('2')}
                          >
                            complete request
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ padding: ".625rem" }} >Request ID</th>
                            <th style={{ padding: ".625rem" }} >Vendor name</th>
                            <th style={{ padding: ".625rem" }} >Amount</th>
                            <th style={{ padding: ".625rem" }} >Created</th>
                            <th style={{ padding: '.625rem' }}>Action</th>

                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          {
                            payoutList && payoutList.length > 0 && payoutList.map(item => [
                              <tr>
                                <td style={{ padding: ".625rem" }} >

                                  {item._id}
                                </td>
                                <td style={{ padding: ".625rem" }} >{item.distributor_id.firstname}</td>
                                <td style={{ padding: ".625rem" }} >{item.amount}</td>
                                <td style={{ padding: ".625rem" }} >{new Date(item.createdAt).toLocaleDateString('en-GB')}</td>
                                <td >

                                  <div >
                                    <h5 className="mb-0"></h5>
                                    <div className="btn-group">
                                    {  item.payment_status !== 2 && item.payment_status === 1 &&(
                                      <button
                                        type="button"
                                        className="btn"
                                        style={{ backgroundColor: "#6EAFAB", color: "white" }}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={() => Acceptpayout(item._id)}
                                      >
                                        Accept payout
                                      </button>
                                    )}
                                      {/* <button
                                        type="button"
                                        className="btn  "
                                        style={{ backgroundColor: "#6EAFAB", color: "white" }}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={()=>{Acceptpayout(item._id)}}
                                      >
                                        Accept payout
                                      </button> */}
                                      {/* <ul className="dropdown-menu">
                                        <li>
                                          <Link
                                            className="dropdown-item"
                                            to=""
                                          >
                                            Paid
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="dropdown-item"
                                            to=""
                                          >
                                            Reject
                                          </Link>
                                        </li>
                                      </ul> */}
                                    </div>
                                  </div>
                                </td>

                              </tr>
                            ])
                          }
                          {
                            payoutList && payoutList.length === 0 && (
                              <tr><td colSpan="4">No Data</td></tr>
                            )
                          }
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
    </>
  );
}
