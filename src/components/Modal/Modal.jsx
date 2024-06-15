import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import s from "./Modal.module.css";

const Modal = ({ closeModal, item, isOpen }) => {
  useEffect(() => {
    const addCloseEvent = (event) => {
      event.key === "Escape" && closeModal();
    };
    document.addEventListener("keydown", addCloseEvent);

    return () => {
      document.removeEventListener("keydown", addCloseEvent);
    };
  }, [isOpen, closeModal]);

  const closeOnClickOutside = (event) => {
    event.target === event.currentTarget && closeModal();
  };

  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <IoClose className={s.closeIcon} onClick={closeOnClickOutside} />
        <img className={s.image} src={item.img} alt={item.description} />
        <h3 className={s.text1}>
          {item.make} <span>{item.model}</span>, {item.year}
        </h3>
        <p className={s.thinText}>
          {item.address.split(", ")[1]} | {item.address.split(", ")[2]} | id:{" "}
          {item.id} | Year: {item.year} | Type: {item.type} | Fuel Consumption:{" "}
          {item.fuelConsumption} | Engine Size: {item.engineSize}
        </p>
        <p className={s.text2}>{item.description}</p>
        <div>
          <h3 className={s.text3}>Accessories and functionalities:</h3>
          <p className={s.thinText}>
            {item.accessories.concat(item.functionalities).join(" | ")}
          </p>
        </div>
        <h3 className={s.text3}>Rental Conditions:</h3>
        <ul className={s.list}>
          {item.rentalConditions.split("\n").map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
          <li>
            Mileage: <span>{item.mileage.toLocaleString()}</span>
          </li>
          <li>
            Price: <span>{item.rentalPrice}</span>
          </li>
        </ul>

        <Link to="tel:+380730000000" onClick={closeModal}>
          <button className={s.btn}>Rental car</button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
