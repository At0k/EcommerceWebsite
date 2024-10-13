import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sambalNyetImage from "../images/sambal-nyet-berapi.jpg";
import dendengNyetImage from "../images/dendeng-nyet-berapi.jpg";
import pauImage from "../images/pau.jpeg";
import aglioOlioImage from "../images/aglio-olio.jpeg";
import stimbotPasteImage from "../images/stimbot-paste.jpeg";

// Define the products in an array
const productsData = [
  { name: "Sambal Nyet Berapi", image: sambalNyetImage },
  { name: "Dendeng Nyet Berapi", image: dendengNyetImage },
  { name: "Pau", image: pauImage },
  { name: "Aglio Olio", image: aglioOlioImage },
  { name: "Stimbot Paste", image: stimbotPasteImage },
];

function Product({ name, price, percentOff }) {
  let offPrice = `${price}`;
  let discountBadge = null;

  // Find the product in the productsData array
  const product = productsData.find(p => p.name === name);
  const image = product ? product.image : ""; // Get the image if product exists

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
      <div className="card shadow-sm" style={{ height: '100%' }}>
        <Link to="/products/1" replace>
          {discountBadge}
          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt={name}
            src={image} // Use the found image
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '200px',
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
