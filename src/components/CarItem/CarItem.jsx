import { useDispatch } from "react-redux";
import { likeCar } from "../../redux/carsSlice";

const CarItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(likeCar(item.id));
  };

  return (
    <li key={item.id}>
      <img src={item.img} alt={item.description} width={200} />
      <h3>{item.make}</h3>
      <p>{item.address[2]}</p>
      <p>{item.type}</p>
      <button onClick={handleLikeClick}>Like</button>
    </li>
  );
};

export default CarItem;
