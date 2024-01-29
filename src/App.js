import { useLayoutEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import Newsletter from './components/Elements/Newsletter/Newsletter.jsx';
import Footer from './components/Elements/Footer/Footer.jsx';
import './styles/global.scss';

const App = () => {
  
  //  GSAP
  const mainRef = useRef(null);
  useLayoutEffect(() => {
    const main = mainRef.current;
    gsap.fromTo(main, {opacity: 0}, {opacity: 1, duration: .5, ease: 'sine.out'});
  }, []);

  return(
    <main id='main' ref={mainRef}>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </main>
  )
};

export default App;
