import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Fetch products with token
    const fetchProducts = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        if (authToken) {
          const response = await axios.get(
            "http://13.235.8.138:81/distributor_get_product",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          setProducts(response.data);
          setToken(authToken);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Provide the products state to the children components
  return (
    <ApiContext.Provider
      value={{
        products,
        token,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
