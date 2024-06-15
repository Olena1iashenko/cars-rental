import { useSelector } from "react-redux";
import { useState } from "react";
import s from "./Filter.module.css";
import CarItem from "../CarItem/CarItem";

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
    setSelectedPriceRange(event.target.value);
  };
  const handleSearch = () => {
    const filtered = cars.filter((car) => {
      const byMake = selectedMake === "" || car.make === selectedMake;
      const byPrice =
        selectedPriceRange === "" ||
        car.rentalPrice <= parseInt(selectedPriceRange);
      return byMake && byPrice;
    });
    setFilteredCars(filtered);
  };

  return (
    <>
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
        <button className={s.search} type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        <ul className={s.filteredCars}>
          {filteredCars?.map((car) => (
            <CarItem key={car.id} item={car} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filter;
