/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import axios from 'axios';
import toastr from 'toastr';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Ordertbody from './Ordertbody';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { get } from '../network/fetcher';
import { endpoint } from '../network/endpoints';

export default function Ordertable() {
  const { data, isLoading, mutate } = useSWR(endpoint, get);

  const handleDelivery = async (orderid) => {
    try {
      const response = await axios.post(
        'https://api.meddaily.in/order_status_change',
        {
          order_id: orderid,
          status: 3,
        }
      );
      if (response.status === 200) {
        toastr.success('Order status updated successfully');
        mutate(); // Refresh the order list after status change
      }
    } catch (error) {
      toastr.error('Error updating order status');
      console.error(error);
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
                      {isLoading ? (
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Order id</th>
                              <th>Retailer name</th>
                              <th>Distributor Name</th>
                              <th>Total Price</th>
                              <th>Status</th>
                              <th>Details</th>
                            </tr>
                          </thead>

                          {data?.message?.map((item) => {
                            return (
                              <Ordertbody
                                id={item?._id}
                                orderId={item?.order_id}
                                userType={item?.retailer_name}
                                userId={item?.distributor_name}
                                price={item?.price}
                                status={item?.order_status}
                                details={'View Full details'}
                                delivered={handleDelivery}
                              />
                            );
                          })}
                        </table>
                      )}
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

// const authToken = localStorage.getItem('authToken');

// const [orderList, setOrderList] = useState([]);

// useEffect(() => {
//   // getAllOrders();
//   handleOrders();
// }, [authToken]);

// const handleOrders = async () => {
//   try {
//     const response = await axios.get('https://api.meddaily.in/all_order');
//     if (response.status === 200) {
//       setOrderList(response?.data?.message);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
// async function deleteOrder(event, orderId) {
//   event.preventDefault();
//   console.log(orderId);
//   await axios
//     .delete(`${config.backendURL}/orders/delete-order`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         orderId: orderId,
//       },
//     })
//     .then((res) => {
//       if (res.status === 200) {
//         toastr.success(res.data.message);
//         // getAllOrders();
//         handleOrders();
//       }
//     })
//     .catch((err) => {
//       toastr.error(err.response.data.message);
//       console.log(err);
//     });
// }
