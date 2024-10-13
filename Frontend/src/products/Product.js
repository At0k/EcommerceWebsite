
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Product({ name, price, image }) {
  return (
    <div className="col">
      <div className="card shadow-sm" style={{ height: '100%' }}>
        <Link to="/products/1" replace>
          <img 
            className="card-img-top bg-dark cover" 
            height="200" 
            alt={name} 
            src={image} 
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '200px' 
            }} 
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">{name}</h5>
          <p className="card-text text-center text-muted mb-0">{price}</p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
              <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;


