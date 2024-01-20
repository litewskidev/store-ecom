import Hero from "../../Elements/Hero/Hero.jsx";
import Newsletter from "../../Elements/Newsletter/Newsletter.jsx";
import './Home.scss';

const Home = () => {
  return(
    <section id="home">
      <Hero />
      <Newsletter />
    </section>
  );
};

export default Home;
