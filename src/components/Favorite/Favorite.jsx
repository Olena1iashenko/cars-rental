import { useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";
function isLiked(id) {
  // Retrieve existing likes from localStorage
  let likes = JSON.parse(localStorage.getItem("likes")) || [];

  // Check if the id exists in likes
  return likes.includes(id);
}

const Favorites = () => {
  const cars = useSelector((state) => state.cars.items);
  const favoriteCars = cars.filter((car) => isLiked(car.id));
  return (
    <div>
      <h2>Favorite Cars</h2>
      <ul>
        {favoriteCars.map((car) => (
          <CarItem key={car.id} item={car} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
