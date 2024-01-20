import { NavLink } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return(
    <div className="hero__wrapper">
      <div className="hero__hero">
        <video className="hero__hero__video" autoPlay loop muted playsInline type="video/mp4" src={process.env.PUBLIC_URL + '/assets/videos/video_1_superlow.mp4'}></video>
        <div className="hero__hero__title">
          <h1>YOUR TIME HAS COME.</h1>
          <NavLink to='/categories/new-arrivals'>SHOP NEW ARRIVALS</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
