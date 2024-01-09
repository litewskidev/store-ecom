import { Outlet } from 'react-router-dom';
import './styles/global.scss';
import Navbar from './components/Elements/Navbar/Navbar';

const App = () => {
  return(
    <main id='main'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default App;
