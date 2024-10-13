import Banner from "./Banner";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import sambalNyetImage from "../images/sambal-nyet-berapi.jpg";
import dendengNyetImage from "../images/dendeng-nyet-berapi.jpg";
import pauImage from "../images/pau.jpeg";
import aglioOlioImage from "../images/aglio-olio.jpeg";
import stimbotPasteImage from "../images/stimbot-paste.jpeg";

function Landing() {
  const products = [
    { 
      name: "Sambal Nyet Berapi", 
      //price: "RM14.00", 
      description: "A fiery, delicious sambal made with fresh chili, garlic, and secret spices. Perfect for spicing up any meal.", 
      image: sambalNyetImage
    },
    { 
      name: "Dendeng Nyet Berapi", 
      //price: "RM25.00", 
      description: "Crispy and flavorful beef jerky marinated with sambal and spices for that perfect snack or side dish.", 
      image: dendengNyetImage
    },
    { 
      name: "Pau", 
      //price: "RM10.00", 
      description: "Soft, fluffy steamed buns filled with various flavors like kaya, red bean, and meat fillings.", 
      image: pauImage
    },
    { 
      name: "Aglio Olio", 
      //price: "RM18.00", 
      description: "A fusion pasta dish cooked with olive oil, garlic, chili flakes, and a Malaysian twist of spices.", 
      image: aglioOlioImage
    },
    { 
      name: "Stimbot Paste", 
      //price: "RM12.00", 
      description: "A savory paste for steamboat, packed with flavor to enhance your hotpot experience.", 
      image: stimbotPasteImage
    },
  ];

  const feedbacks = [
    { name: "John Doe", comment: "Absolutely love the Sambal! Perfect spice level." },
    { name: "Jane Smith", comment: "The Aglio Olio is a must-try! Can't get enough." },
    { name: "Alice Johnson", comment: "Fast delivery and amazing quality!" },
    { name: "Bob Williams", comment: "Great flavors and excellent customer service." },
  ];   

  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5" style={{ color: "black" }}>
          Discover Khairul Aming's best-selling products, perfect for food lovers who enjoy bold and authentic flavors!
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Browse products
          </Link>
        </div>
      </div>

      <h2 className="text-muted text-center mt-4 mb-3" style={{ color: "black" }}>Featured Products</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {products.map((product, i) => (
            <div key={i} className="col">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "black" }}>{product.name}</h5>
                  <p className="card-text" style={{ color: "black" }}>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Feedback Slider Section */}
      <div className="bg-light py-4">
  <h3 className="text-center mb-4" style={{ color: "black" }}>Customer Feedback</h3>
  <div className="container">
    <div className="row">
      {feedbacks.map((feedback, i) => (
        <div key={i} className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>{feedback.name}</h5>
              <p className="card-text" style={{ color: "black" }}>"{feedback.comment}"</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Khairul Aming. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy" className="text-white">Privacy Policy</Link> |{" "}
          <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
        </p>
      </footer>
    </>
  );
}

export default Landing;