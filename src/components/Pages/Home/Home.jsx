import { NavLink } from "react-router-dom";
import './Home.scss';

const Home = () => {
  return(
    <section id="home">
      <div className="home__wrapper">
        <div className="home__hero">
          <video className="home__hero__video" autoPlay loop muted playsInline type="video/mp4" src={process.env.PUBLIC_URL + '/assets/videos/video_1_superlow.mp4'}></video>
          <div className="home__hero__title">
            <h1>YOUR TIME HAS COME.</h1>
            <NavLink to='/shop/new-arrivals'>SHOP NEW ARRIVALS</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
