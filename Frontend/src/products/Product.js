import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../cart/CartContext';

function Product({ code, name, price, image, description }) {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from context

  const handleAddToCart = () => {
    const product = { code, name, price, image, description, quantity: 1 }; // Define product details
    addToCart(product); // Call the addToCart function
  };

  return (
    <div className="col">
      <div className="card shadow-sm" style={{ height: '100%' }}>
        <Link to={``} replace>
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
          <h5 className="card-title text-center text-dark text-truncate">{code}</h5>
          <h5 className="card-title text-center text-dark text-truncate">{name}</h5>
          <p className="card-text text-center text-muted mb-0">{description}</p>
          <p className="card-text text-center text-muted mb-0">RM{price}</p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={['fas', 'cart-plus']} /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;