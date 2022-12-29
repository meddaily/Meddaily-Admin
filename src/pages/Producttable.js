import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import productdata from './productdata'
import Producttbody from './Producttbody'
export default function Producttable() {

const product = productdata.map((item) => {
  return (
    <Producttbody
      key={item.id}
      productname={item.productname}
      mnfname={item.mnfname}
      medicinetype={item.medicinetype}
      delete={"Action"}
    />
  );
}); 

  
  return (
    <>
     <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
 
{/* sidebar */}
      <Sidebar/>
      

   
        <div className="layout-page">
     

     {/* navbar */}
         <Navbar/>
          

         
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
                        <li><a className="dropdown-item" href="javascript:void(0);">Genric</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">OTC</a></li>
                        <li><a className="dropdown-item" href="javascript:void(0);">Branded</a></li>
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
                        <th style={{padding:".625rem 5.25rem"}} > Product Name</th>
                        <th style={{padding:".625rem 5.25rem"}} >Mnf Name</th>
                        <th style={{padding:".625rem 5.25rem"}} >Medicine Type</th>
                        <th style={{padding:".625rem 5.25rem"}} >Action</th>
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
  )
}
