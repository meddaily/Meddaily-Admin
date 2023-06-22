import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const OffersList = () => {
  const [offers, setOffers] = useState("");

  useEffect(() => {
    getAllOffers();
  }, []);

  const getAllOffers = async () => {
    try {
      const res = await axios.get(`http://api.meddaily.in/getoffer`);
      if (res.status === 200) {
        setOffers(res?.data?.data);
      }
    } catch (error) {}
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
                    <h5 className="card-header float-start">
                      List Of All Offers{" "}
                    </h5>
                    <div className="container">
                      <h5>Offer Table</h5>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Created At</th>
                            </tr>
                          </thead>
                          <tbody>
                            {offers&&offers.length>0&&offers.map((item) => (
                              <tr key={item._id}>
                                <td>
                                  {item.image.startsWith(
                                    "https://meddaily.s3.ap-south-1.amazonaws.com/"
                                  ) ? (
                                    <img
                                      src={item.image}
                                      alt="Image"
                                      style={{ maxWidth: "100px" }}
                                    />
                                  ) : (
                                    <img
                                      src={item.image}
                                      alt="Image"
                                      style={{ maxWidth: "100px" }}
                                    />
                                  )}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.createdAt}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersList;
