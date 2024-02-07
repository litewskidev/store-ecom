import Featured from "../../Elements/Featured/Featured.jsx";
import Hero from "../../Elements/Hero/Hero.jsx";
import HeroAbout from "../../Elements/HeroAbout/HeroAbout.jsx";
import HeroHalf from "../../Elements/HeroHalf/HeroHalf.jsx";
import NewArrivals from "../../Elements/NewArrivals/NewArrivals.jsx";
import StickyHalf from "../../Elements/StickyHalf/StickyHalf.jsx";
import './Home.scss';

const Home = () => {
  return(
    <section id="home">
      <Hero />
      <NewArrivals />
      <Featured />
      <HeroAbout />
      <StickyHalf />
      <HeroHalf />
    </section>
  );
};

export default Home;
