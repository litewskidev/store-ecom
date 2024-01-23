import { Outlet } from 'react-router-dom';
import './styles/global.scss';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import Footer from './components/Elements/Footer/Footer.jsx';
import Newsletter from './components/Elements/Newsletter/Newsletter.jsx';

const App = () => {
  return(
    <main id='main'>
      <Navbar />
      <div className='main__body'>
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;
