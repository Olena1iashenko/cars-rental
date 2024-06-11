import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk } from "../../redux/operations";
import CarItem from "../CarItem/CarItem";
import s from "./CarsList.module.css";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.items);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {cars?.map((item) => (
        <CarItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CarsList;
