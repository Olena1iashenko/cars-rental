import CarsList from "../CarsList/CarsList";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk } from "../../redux/operations"; // Імпорт функції fetchAllCarsThunk

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const cars = useSelector((state) => state.cars.items);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const hasMoreCars = cars.length % 12 === 0 && cars.length > 0;
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
      <CarsList />
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

export default Catalog;
