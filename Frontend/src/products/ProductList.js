import { Link } from "react-router-dom";
import Product from "./Product"; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";

// Define your product data
const products = [
  { id: 1, name: "Sambal Nyet", price: "RM14.00" },
  { id: 2, name: "Pau", price: "RM20.00" },
  { id: 3, name: "Dendeng Nyet Berapi", price: "RM14.99" },
  { id: 4, name: "Aglio Olio", price: "RM15.00" },
  { id: 5, name: "Stimbot Paste", price: "RM9.50" },
];

function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });

  function changeViewType() {
    setViewType({ grid: !viewType.grid });
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
                {/* <div className="input-group">
                  <input className="form-control" type="text" placeholder="Search products..." aria-label="search input" />
                  <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={["fas", "search"]} />
                  </button>
                </div>
                <button className="btn btn-outline-dark ms-2" onClick={changeViewType}>
                  <FontAwesomeIcon icon={["fas", viewType.grid ? "th-list" : "th-large"]} />
                </button> */}
              </div>
            </div>
            <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 ${viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2"}`}>
              {products.map((product) => (
                <Product key={product.id} name={product.name} price={product.price} />
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
