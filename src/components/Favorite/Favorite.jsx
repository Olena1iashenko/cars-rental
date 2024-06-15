import { useSelector } from "react-redux";
import CarItem from "../CarItem/CarItem";
import s from "./Favorite.module.css";

function isLiked(id) {
  let likes = JSON.parse(localStorage.getItem("likes")) || [];
  return likes.includes(id);
}

const Favorites = () => {
  const cars = useSelector((state) => state.cars.items);
  const favoriteCars = cars.filter((car) => isLiked(car.id));
  return (
    <div className={s.mainBox}>
      <h2>Favorite Cars</h2>
      <ul className={s.list}>
        {favoriteCars.map((car) => (
          <CarItem key={car.id} item={car} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
