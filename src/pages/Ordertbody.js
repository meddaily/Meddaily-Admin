import React from "react";
import { Link } from "react-router-dom";

export default function Ordertbody(props) {
  return (
    <>
      <tbody className="table-border-bottom-0">
        <tr>
          <td>
            <i className="fab fa-angular fa-lg text-danger me-3"></i> {props.id}
          </td>
          <td>{props.rname}</td>
          <td>{props.dname}</td>
          <td>{props.price}</td>
          <td>
            <div className="dropdown">
              <Link className="dropdown-item" to="#">
                {" "}
                {props.details}
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
