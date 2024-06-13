import CarsList from "../CarsList/CarsList";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import makes from "../../../public/makes.json";
// import CarItem from "../CarItem/CarItem";

const Catalog = () => {
  // const [selectedMake, setSelectedMake] = useState("");
  // const [filteredCars, setFilteredCars] = useState([]);
  // const cars = useSelector((state) => state.cars.items);

  // useEffect(() => {
  //   if (selectedMake === "") {
  //     setFilteredCars(cars);
  //   } else {
  //     const filtered = cars.filter((car) => car.make === selectedMake);
  //     setFilteredCars(filtered);
  //   }
  // }, [selectedMake, cars]);

  // const handleMakeChange = (event) => {
  //   setSelectedMake(event.target.value);
  // };

  return <CarsList />;
};

export default Catalog;
