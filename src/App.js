import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/Elements/Loader/Loader.jsx';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import Newsletter from './components/Elements/Newsletter/Newsletter.jsx';
import Footer from './components/Elements/Footer/Footer.jsx';
import './styles/global.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, [1500]);

  return(
    <main id='main'>
      <Loader loading={isLoading}/>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;
