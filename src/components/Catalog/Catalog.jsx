import { useEffect } from "react";
import { fetchAllCarsThunk } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import s from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.items);
  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {cars?.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.img} alt={item.description} width={200} />
            <h3>{item.make}</h3>
            <p>{item.address[2]}</p>
            <p>{item.type}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Catalog;
