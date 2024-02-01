import Hero from "../../Elements/Hero/Hero.jsx";
import NewArrivals from "../../Elements/NewArrivals/NewArrivals.jsx";
import './Home.scss';

const Home = () => {
  return(
    <section id="home">
      <Hero />
      <NewArrivals />
    </section>
  );
};

export default Home;
