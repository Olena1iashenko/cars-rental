import { useDispatch, useSelector } from "react-redux";
import { SetFilterName } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filters.name);
  const handleFilteredData = (event) => {
    dispatch(SetFilterName(event.target.value));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="search"
        value={searchValue}
        onChange={handleFilteredData}
        placeholder="Enter your search ..."
      />
    </label>
  );
};

export default SearchBox;
