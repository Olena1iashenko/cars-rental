import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk } from "../../redux/operations";
import CarItem from "../CarItem/CarItem";
import Filter from "../Filter/Filter";

const CarsList = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.items);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
      <Filter />
      <ul>
        {cars?.map((car) => (
          <CarItem key={car.id} item={car} />
        ))}
      </ul>

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
