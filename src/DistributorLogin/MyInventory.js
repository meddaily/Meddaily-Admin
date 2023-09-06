import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ApiContext } from "./DistContext/DisContext";

const MyInventory = () => {
  const { products } = useContext(ApiContext);
  const maxLength = 50;
  return (
    <>

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header float-start">My Inventory</h5>

                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Describtion</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products &&
                            products.length > 0 &&
                            products.map((product) => {
                              return (
                                <tr key={product._id}>
                                  <td>{product.title}</td>
                                  <td>
                                    {product.description.substring(
                                      0,
                                      maxLength
                                    ) + "..."}
                                  </td>
                                  <td>
                                    <div className="dropdown">
                                      <Link
                                        className="dropdown-item"
                                        to={{
                                          pathname: "/updateinv",
                                          state: {
                                            productId: product._id,
                                          },
                                        }}
                                      >
                                        {" "}
                                        View Full Details
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
    </>
  );
};

export default MyInventory;
