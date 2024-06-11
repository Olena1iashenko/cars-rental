import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={s.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorite</Link>
      </nav>
      <Outlet />
    </div>
  );
};
