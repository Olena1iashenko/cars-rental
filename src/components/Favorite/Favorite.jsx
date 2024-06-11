import { useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";

const Favorites = () => {
  const cars = useSelector((state) => state.cars.items);
  const favoriteCars = cars.filter((car) => car.liked);
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
