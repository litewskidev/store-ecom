import { Outlet } from 'react-router-dom';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import Newsletter from './components/Elements/Newsletter/Newsletter.jsx';
import Footer from './components/Elements/Footer/Footer.jsx';
import './styles/global.scss';

const App = () => {
  return(
    <main id='main'>
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
