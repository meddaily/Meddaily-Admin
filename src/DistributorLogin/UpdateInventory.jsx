import React from "react";
import toastr from "toastr";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UpdateInventory = () => {
  const [edit, setEdit] = useState("");
  const [inventory, setInventory] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const location = useLocation();
  const { productId } = location.state;

  useEffect(() => {
    axios
      .get(`http://13.235.8.138:81/editproduct/${productId}`)
      .then((response) => {
        setEdit(response?.data?.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { title, _id } = edit;

  const handle = (e) => {
    const { name, value } = e.target;
    setInventory({ ...inventory, [name]: value });
  };

  const { name, price, stock } = inventory;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("disToken");
    const disId = localStorage.getItem("id");

    if (name === "") {
      return toastr.warning("name cannot be empty !");
    }
    if (price === "") {
      return toastr.warning("price cannot be empty !");
    }
    if (stock === "") {
      return toastr.warning("stock cannot be empty !");
    }
    const reqBody = {
      productId: _id,
      distributorId: disId,
      distributorName: name,
      price: price,
      stock: stock,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        token: `${authToken}`,
      },
    };
    try {
      const response = await axios.post(
        `http://13.235.8.138:81/update_inventory`,
        reqBody,
        axiosConfig
      );
      if (response.status === 200) {
        toastr.success(response.data.message);
        setInventory({
          name: "",
          price: "",
          stock: "",
        });
      }
    //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setInventory({
      name: "",
      price: "",
      stock: "",
    });
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Navbar />
            <h3 className="mt-3">Update The Inventory </h3>
            <div className="mt-3 m-5">
              <form id="formAccountSettings">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label for="name" className="form-label float-start">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handle}
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label for="productname" className="form-label float-start">
                      Product Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="productname"
                      id="productname"
                      defaultValue={title}
                      readOnly
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label float-start" for="price ">
                      Price
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="form-control"
                        placeholder="100"
                        value={price}
                        onChange={handle}
                      />
                    </div>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label for="stock" className="form-label float-start">
                      Stock
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="stock"
                      name="stock"
                      placeholder="20"
                      value={stock}
                      onChange={handle}
                    />
                  </div>
                </div>
                <button className="btn btn-primary" onClick={handleUpdate}>
                  Update
                </button>
                <button
                  className="btn btn-secondary mx-3"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateInventory;
