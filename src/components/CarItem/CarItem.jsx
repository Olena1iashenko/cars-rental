import { useDispatch } from "react-redux";
import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toggleLike } from "../../redux/carsSlice";
import Modal from "../Modal/Modal";
import s from "./CarItem.module.css";

function isLiked(id) {
  let likes = JSON.parse(localStorage.getItem("likes")) || [];
  return likes.includes(id);
}

const CarItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLikeToggle = () => {
    dispatch(toggleLike(item.id));
  };
  let likedEl = isLiked(item.id);

  return (
    <li className={s.item} key={item.id}>
      <img src={item.img} alt={item.description} />
      <h3 className={s.text}>
        {item.make}, {item.year}
        <span>{item.rentalPrice}</span>
      </h3>
      <p className={s.thinText}>
        {item.address.split(", ")[1]} | {item.address.split(", ")[2]} |
        {item.rentalCompany}
      </p>
      <p className={s.thinText}>
        {item.type} | {item.model} | id: {item.id} | {item.mileage} mi
      </p>
      <button className={s.btn} type="button" onClick={openModal}>
        Learn more
      </button>
      {isModalOpen && (
        <Modal item={item} isOpen={isModalOpen} closeModal={closeModal} />
      )}

      {likedEl ? (
        <FcLike onClick={handleLikeToggle} />
      ) : (
        <FcLikePlaceholder onClick={handleLikeToggle} />
      )}
    </li>
  );
};

export default CarItem;
