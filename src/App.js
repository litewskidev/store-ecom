//import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
//import Loading from './components/Elements/Loading/Loading.jsx';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import Newsletter from './components/Elements/Newsletter/Newsletter.jsx';
import Footer from './components/Elements/Footer/Footer.jsx';
import './styles/global.scss';

const App = () => {
  /*
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  */

  return(
    <main id='main'>
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
