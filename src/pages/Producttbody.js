import React from "react";
import { Link } from "react-router-dom";
export default function producttbody(props) {
  return (
    <>
      <tbody className="table-border-bottom-0">
        <tr>
          <td style={{ padding: ".625rem 5.25rem" }}>
            <i className="fab fa-angular fa-lg text-danger me-3"></i>
            {props.productname}
          </td>
          <td style={{ padding: ".625rem 5.25rem" }}>{props.mnfname}</td>
          <td style={{ padding: ".625rem 5.25rem" }}>{props.medicinetype}</td>
          <td style={{ padding: ".625rem 5.25rem" }}>
            {" "}
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
                      // id={props.key}
                      onClick={(event) => props.deleteProduct(props.productId)}
                      className="dropdown-item"
                    >
                      Delete
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="javascript:void(0);">
                      Disable
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" 
                    // to="/updateproduct"
                    to={{
                      pathname: "/updateproduct",
                      state: { id: props.productId },
                    }}
                    >
                      Edit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
