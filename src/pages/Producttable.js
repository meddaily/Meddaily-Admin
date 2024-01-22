import React, { useEffect, useState } from "react";
import axios from "axios";
import toastr from "toastr";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import productdata from './productdata'
import Producttbody from "./Producttbody";
// import config from '../appConfig';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Producttable() {
  const authToken = localStorage.getItem('authToken');

  const [productList, setProductList] = useState([]);
  const [selectedMedicineType, setSelectedMedicineType] = useState('');

  useEffect(() => {
    getAllProducts();
  }, [authToken, selectedMedicineType]);

  async function getAllProducts() {
    const apiUrl = `https://api.meddaily.in/getproduct?medicineType=${selectedMedicineType}`;
    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        setProductList(response.data.data);
      }
    } catch (err) {
      toastr.error(err.response?.data?.message);
      console.error(err);
    }
  }

  function handleMedicineTypeChange(type) {
    setSelectedMedicineType(type);
  }

  async function deleteProduct(productId) {
    try {
      await axios.delete(`https://api.meddaily.in/deleteproduct/${productId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          productId: productId,
        },
      });
      toastr.success('Product deleted successfully');
      getAllProducts();
    } catch (err) {
      toastr.error(err.response.data.message);
      console.error(err);
    }
  }

  const columns = [
    {
      label: 'Product Name',
      field: 'productname',
      sort: 'asc',
    },
    {
      label: 'Mnf Name',
      field: 'mnfname',
      sort: 'asc',
    },
    {
      label: 'Medicine Type',
      field: 'medicinetype',
      sort: 'asc',
    },
    {
      label:'Edit',
      field:'edit'
    },
    {
      label: 'Action',
      field: 'delete',
    },
  ];

  const rows = productList.map((item, i) => ({
    productname: item.title,
    mnfname: item.sub_title,
    medicinetype: item.category_id || 'N/A',
    delete: (
      <button
        className="btn"
        variant="text"
        style={{backgroundColor:"#DC143C",color:"white"}}
        onClick={() => deleteProduct(item._id)}
      >
        Delete
      </button>
    ),
    edit: (
      <button
        className="btn"
        variant="text"
        style={{backgroundColor:"#6EAFAB"}}
       
      >
        <Link
        style={{color:"white"}} 
        to={`/productedit/${item._id}`}>
        Update
        </Link>
      </button>
    ),
  }));

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
                    className="btn dropdown-toggle"
                    variant="text"
                    style={{backgroundColor:"#6EAFAB",color:"white"}}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Medicine Type
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={() => handleMedicineTypeChange('Genric')}
                      >
                        Generic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={() => handleMedicineTypeChange('OTC')}
                      >
                        OTC
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="javascript:void(0);"
                        onClick={() => handleMedicineTypeChange('Branded')}
                      >
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
    </>
  );
}

