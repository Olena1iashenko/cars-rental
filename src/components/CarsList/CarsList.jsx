import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk } from "../../redux/operations";
import CarItem from "../CarItem/CarItem";
import makes from "../../../public/makes.json";
// import s from "./CarsList.module.css";

const CarsList = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedMake, setSelectedMake] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.items);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    if (selectedMake === "") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) => car.make === selectedMake);
      setFilteredCars(filtered);
    }
  }, [selectedMake, cars]);

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  // const hasMoreCars = cars.length % 12 === 0 && cars.length > 0;
  const hasMoreCars = cars.length >= 12 * page;

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        await dispatch(fetchAllCarsThunk(page));
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
      setLoading(false);
    };

    fetchCars();
  }, [dispatch, page]);

  return (
    <div>
      <div>
        <select value={selectedMake} onChange={handleMakeChange}>
          Car brand
          <option value="Car brand">All Makes</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        <ul>
          {filteredCars?.map((car) => (
            <CarItem key={car.id} item={car} />
          ))}
        </ul>
      </div>
      {/* <ul className={s.list}>
        {cars?.map((item) => (
          <CarItem key={item.id} item={item} />
        ))}
      </ul> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleLoadMore} disabled={!hasMoreCars || loading}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CarsList;
