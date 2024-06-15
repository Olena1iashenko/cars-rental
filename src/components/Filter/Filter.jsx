import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import s from "./Filter.module.css";

const Filter = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  // const [filteredCars, setFilteredCars] = useState([]);
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
    const filterCars = () => {
      const filtered = cars.filter((car) => {
        const byMake = selectedMake === "" || car.make === selectedMake;
        const byPrice =
          selectedPriceRange === "" ||
          car.rentalPrice <= parseInt(selectedPriceRange);
        return byMake && byPrice;
      });
      return filtered;
    };

    filterCars();
  }, [cars, selectedMake, selectedPriceRange]);

  return (
    <div className={s.selects}>
      <label>
        Car brand
        <select
          className={s.makeSelect}
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
      </label>
      <label>
        Price/ 1 hour
        <select
          className={s.priceSelect}
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
      </label>
      <button className={s.search} type="submit">
        Search
      </button>
    </div>
  );
};

export default Filter;
