import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../sambal-nyet-berapi.jpg'; // Use your actual product images

function Product({ name, price, percentOff }) {
  let offPrice = `${price}`;
  let discountBadge = null;

  if (percentOff && percentOff > 0) {
    discountBadge = (
      <div
        className="badge bg-dim py-2 text-white position-absolute"
        style={{ top: '0.5rem', right: '0.5rem' }}
      >
        {percentOff}% OFF
      </div>
    );
    const discountedPrice = (price - (percentOff * parseFloat(price.replace("RM", ""))) / 100).toFixed(2);
    offPrice = (
      <>
        <del>{price}</del> RM{discountedPrice}
      </>
    );
  }

  return (
    <div className="col">
      <div className="card shadow-sm" style={{ height: '100%' }}> {/* Ensures card takes full height */}
        <Link to="/products/1" replace>
          {discountBadge}
          <img 
            className="card-img-top bg-dark cover" 
            height="200" 
            alt="" 
            src={Image} 
            style={{ 
              objectFit: 'cover', // Maintain aspect ratio without stretching
              width: '100%', // Full width
              height: '200px' // Fixed height
            }} 
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">{name}</h5>
          <p className="card-text text-center text-muted mb-0">{offPrice}</p>
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
