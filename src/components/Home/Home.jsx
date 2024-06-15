import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.mainBox}>
      <h2>Welcome to Car Rental</h2>
      <p>Find the perfect car for your next adventure!</p>
      <img src="../../../public/pngwing.com.png" alt="Car Rental Image" />
    </div>
  );
};

export default Home;
