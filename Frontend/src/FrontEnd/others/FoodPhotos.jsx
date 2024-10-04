import { pasta, pizza } from "../../assets/images";
import "./FoodPhotos.css";

const FoodPhotos = () => {
  return (
    <div className="photo-container">
      <div className="photo-row">
        <img
          src={pizza}
          alt="Pizza"
          className="food-photo"
        />
        <img
          src={pasta}
          alt="Pasta"
          className="food-photo"
        />
      </div>
    </div>
  );
}

export default FoodPhotos;
