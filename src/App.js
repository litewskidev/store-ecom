import { Outlet } from 'react-router-dom';
import './styles/global.scss';
import Navbar from './components/Elements/Navbar/Navbar';
import Footer from './components/Elements/Footer/Footer';

const App = () => {
  return(
    <main id='main'>
      <Navbar />
      <div className='main__body'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default App;
