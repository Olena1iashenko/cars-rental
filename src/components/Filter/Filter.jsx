import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Filter = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const cars = useSelector((state) => state.cars.items);
  const models = useSelector((state) => state.filters.models);

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };
  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setSelectedPriceRange(selectedPrice);
  };

  useEffect(() => {
    cars?.filter(
      (car) =>
        car.make === selectedMake ||
        car.rentalPrice <= parseInt(selectedPriceRange)
    );
    setFilteredCars(filteredCars);
  }, [cars, selectedMake, selectedPriceRange, setFilteredCars]);

  return (
    <div>
      <select
        label="Car brand"
        value={selectedMake}
        onChange={handleMakeChange}
      >
        <option value="">All Makes</option>
        {models.map((make) => (
          <option key={make.id} value={make.make}>
            {make.make}
          </option>
        ))}
      </select>
      <select
        label="Price/ 1 hour"
        value={selectedPriceRange}
        onChange={handlePriceChange}
      >
        <option value="">To $</option>
        {[...Array(50).keys()].map((index) => {
          const price = (index + 1) * 10;
          return (
            <option key={price} value={price}>
              ${price}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
