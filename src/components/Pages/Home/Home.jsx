import Featured from "../../Elements/Featured/Featured.jsx";
import Hero from "../../Elements/Hero/Hero.jsx";
import HeroAbout from "../../Elements/HeroAbout/HeroAbout.jsx";
import NewArrivals from "../../Elements/NewArrivals/NewArrivals.jsx";
import './Home.scss';

const Home = () => {
  return(
    <section id="home">
      <Hero />
      <NewArrivals />
      <Featured />
      <HeroAbout />
    </section>
  );
};

export default Home;
