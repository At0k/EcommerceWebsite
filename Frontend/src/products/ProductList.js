
import { Link } from "react-router-dom";
import Product from "./Product"; 
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

                <button onClick={changeViewType} className="btn btn-outline-dark">Toggle View</button>

              </div>
            </div>

            {/* Rendering fetched products */}
            <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 ${viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2"}`}>
              {products.map((product) => (
                <Product 
                  key={product.id} 
                  code={product.code}
                  name={product.productName} 
                  price={product.price} 
                  image={product.image} // Pass the image URL to Product component
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;

