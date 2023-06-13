import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h3>Banners</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ms-auto">
            <li className="breadcrumb-item">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <Link to="/">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Banners
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
};

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = async () => {
    try {
      const response = await axios.get(`http://api.meddaily.in/getbanner`);
      if (response.status === 200) {
        setBanner(response?.data?.data);
      }
    } catch (error) {
      setBanner([]);
    }
  };

  const handleDel = () => {
    console.log("del");
  };
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          <h3 className="text-muted">Listing All Banners</h3>
          <button className="btn btn-info">Add New Banner</button>
        </div>
        <hr className="mt-4" />
        <div className="col-md-12 mt-3">
          <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {banner &&
                banner.length > 0 &&
                banner.map((item, ind) => {
                  const { image, name } = item;
                  const index = ind + 1;
                  return (
                    <tr key={ind}>
                      <td>{index}</td>
                      <td>{name}</td>
                      <td>
                        <img src={image} alt="banner" />
                      </td>
                      <td>
                        <Link
                          to={{
                            pathname: "/editbanner",
                            state: { id: item._id },
                          }}
                        >
                          <span className="text-info">
                            <FaPencilAlt className="action-icon" />{" "}
                            {/* Edit Icon */}
                          </span>
                        </Link>
                        <span onClick={handleDel} className="text-danger">
                          <FaTrash className="action-icon" />{" "}
                          {/* Delete Icon */}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AllBanners = () => {
  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  );
};

export default AllBanners;
