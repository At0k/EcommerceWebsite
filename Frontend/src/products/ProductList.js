import { Link } from "react-router-dom";
import Product from "./Product"; 
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import React, { useState, useEffect } from 'react';


function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });
  const [products, setProducts] = useState([]);  // State to store fetched products
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState(null);      // State to handle errors

  function changeViewType() {
    setViewType({ grid: !viewType.grid });
  }

  // Fetch product data from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/product");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products only once when component mounts
  }, []); // Empty dependency array ensures it runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded">
        <ol className="breadcrumb p-3 mb-0">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/products" replace>
              All Products
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Food Products</li>
        </ol>
      </nav>

      <div className="row mb-4 mt-lg-3">
        <div className="col-lg-12">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col-lg-12 d-flex flex-row">
                {/* Optional search and view toggle */}
                <button onClick={changeViewType} className="btn btn-outline-dark">Toggle View</button>
              </div>
            </div>

            {/* Rendering fetched products */}
            <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 ${viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2"}`}>
              {products.map((product) => (
                <Product key={product.id} name={product.productName} price={product.price} />
              ))}
            </div>

            <div className="d-flex align-items-center mt-auto">
              <span className="text-muted small d-none d-md-inline">Showing {products.length} of {products.length}</span>
              <nav aria-label="Page navigation example" className="ms-auto">
                <ul className="pagination my-0">
                  <li className="page-item">
                    <a className="page-link" href="!#">Previous</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="!#">1</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="!#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="!#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="!#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
