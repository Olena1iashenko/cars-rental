import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

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
    <div>
      <IoClose onClick={closeOnClickOutside} />
      <img src={item.img} alt={item.description} width={400} />
      <h3>
        {item.make}, {item.year}
      </h3>
      <p>
        {item.address.split(", ")[1]} | {item.address.split(", ")[2]} | id:{" "}
        {item.id} | Year: {item.year} | Type: {item.type} | Fuel Consumption:{" "}
        {item.fuelConsumption} | Engine Size: {item.engineSize}
      </p>
      <p>{item.description}</p>
      <div>
        <h3>Accessories and functionalities:</h3>
        {item.accessories.concat(item.functionalities).join(" | ")}
      </div>
      <ul>
        Rental Conditions:
        {item.rentalConditions.split("\n").map((condition, index) => (
          <li key={index}>{condition}</li>
        ))}
        <li>Mileage: {item.mileage.toLocaleString()}</li>
        <li>Price: {item.rentalPrice}</li>
      </ul>
    </div>
  );
};

export default Modal;
