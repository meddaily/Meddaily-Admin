import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import toastr from "toastr";

// Create the context
export const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem("disToken");
    // Fetch products with token
    async function getOrderDetails() {
      try {
        const response = await axios.get(
          `http://api.meddaily.in/distributor_get_product`,
          {
            headers: {
              token: `${authToken}`,
            },
          }
        );
        if (response.status === 200) {
          setProducts(response?.data?.product);
        }
      } catch (err) {
        toastr.error(err?.response?.data?.message);
        console.log(err);
      }
    }

    getOrderDetails();
    getCategory();
  }, []);

  // admin add product
  const getCategory = async () => {
    try {
      const response = await axios.get(`http://api.meddaily.in/getCategory`);
      setCategory(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Provide the products state to the children components
  return (
    <ApiContext.Provider
      value={{
        products,
        category,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
