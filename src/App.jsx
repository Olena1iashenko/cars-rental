import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCarsThunk } from "./redux/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Select from "./components/Select/Select";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="selected" element={<Select />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
