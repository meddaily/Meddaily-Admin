import React from "react";
import { Link } from "react-router-dom";

export default function Ordertbody(props) {
  const renderAction = () => {
    if (props.status === 0) {
      return <p>Cancel Delivery</p>;
    } else if (props.status === 1) {
      return <p>On Delivery</p>;
    } else if (props.status === 3) {
      return <p>Complete Delivery</p>;
    } else if (props.status === 4) {
      return <p>Place Delivery</p>;
    } else {
      return null;
    }
  };
  return (
    <>
      <tbody className="table-border-bottom-0">
        <tr key={props.id}>
          <td>
            <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
            {props.orderId}
          </td>
          <td>{props.userType ? props.userType : "NA"}</td>
          <td>{props.userId ? props.userId : "NA"}</td>
          <td>{props.price}</td>
          <td>{renderAction()}</td>
          <td style={{ padding: ".625rem 5.25rem" }}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0"></h5>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Action
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/orderdetails/${props.orderId}`}
                    >
                      {props.details}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/updateorder/${props.orderId}`}
                    >
                      cancel
                    </Link>
                  </li>

                  {props.status !== 3 && (
                    <li>
                      <Link
                        id={props.key}
                        onClick={() => props.delivered(props.id)}
                        className="dropdown-item"
                        to="/ordertable"
                      >
                        Delivered
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </td>
          {/* <td>
              <div className="dropdown">
                <Link className="dropdown-item" to="/orderdetails">
                  {" "}
                  {props.details}
                </Link>
              </div>
          </td> */}
        </tr>
      </tbody>
    </>
  );
}
