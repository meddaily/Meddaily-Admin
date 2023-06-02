import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import productdata from './productdata'
import Producttbody from "./Producttbody";
// import config from '../appConfig';

export default function Producttable() {
  const authToken = localStorage.getItem("authToken");

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, [authToken]);

  async function getAllProducts() {
    await axios
      .get(`http://13.235.8.138:81/getproduct`)
      .then((res) => {
        if (res.status === 200) {
          setProductList(res.data.data);
        }
      })
      .catch((err) => {
        toastr.error(err.response.data.message);
        console.log(err);
      });
  }
  //del fun
  async function deleteProduct(productId) {
    await axios
      .delete(`http://13.235.8.138:81/deleteproduct/${productId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          productId: productId,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toastr.success(res?.data?.message);
          getAllProducts();
        }
      })
      .catch((err) => {
        toastr.error(err.response.data.message);
        console.log(err);
      });
  }

  const product =
    productList &&
    productList.length > 0 &&
    productList.map((item, i) => {
      return (
        <Producttbody
          key={i}
          deleteProduct={() => deleteProduct(item._id)}
          productId={item.productId}
          // productname={item.productTitle}
          productname={item.title}
          // mnfname={item.distributorName}
          mnfname={item.sub_title}
          medicinetype={item.productType ? item.productType : "N/A"}
          delete={"Action"}
        />
      );
    });

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* sidebar */}
          <Sidebar />

          <div className="layout-page">
            {/* navbar */}
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
                    Mediciane type
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Genric
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        OTC
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Branded
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="card">
                    <h5 className="card-header">Product Table</h5>
                    <div className="table-responsive text-nowrap">
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ padding: ".625rem 1.25rem" }}>
                              Product Name
                            </th>
                            <th style={{ padding: ".625rem 1.25rem" }}>
                              Mnf Name
                            </th>
                            <th style={{ padding: ".625rem 1.25rem" }}>
                              Medicine Type
                            </th>
                            <th style={{ padding: ".625rem 1.25rem" }}>
                              Action
                            </th>
                          </tr>
                        </thead>
                        {product}
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
