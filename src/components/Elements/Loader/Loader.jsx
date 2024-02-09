import Loading from '../Loading/Loading.jsx';
import './Loader.scss';

const Loader = ({ loading }) => {
  return(
    <div className={`loader__wrapper ${loading ? 'loading' : ''}`}>
      <Loading />
    </div>
  );
};

export default Loader;
