import { useDispatch } from "react-redux";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toggleLike } from "../../redux/carsSlice";

const CarItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleLikeToggle = () => {
    dispatch(toggleLike(item.id));
  };

  return (
    <li key={item.id}>
      <img src={item.img} alt={item.description} width={200} />
      <h3>{item.make}</h3>
      <p>{item.address[2]}</p>
      <p>{item.type}</p>
      {item.liked ? (
        <FcLike onClick={handleLikeToggle} />
      ) : (
        <FcLikePlaceholder onClick={handleLikeToggle} />
      )}
    </li>
  );
};

export default CarItem;
