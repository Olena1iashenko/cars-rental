import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.mainBox}>
      <h2>Welcome to Car Rental</h2>
      <p>Find the perfect car for your next adventure!</p>
      <img
        width={600}
        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
        alt="Car Rental Image"
      />
    </div>
  );
};

export default Home;
