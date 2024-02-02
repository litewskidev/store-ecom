import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading.jsx';
import Products from '../Products/Products.jsx';
import PropTypes from 'prop-types';
import './ProductsList.scss';

const ProductsList = ({ title, products, loading, error }) => {
  const navigate = useNavigate();

  return(
    <div className='productsList__wrapper'>
      <h1>{title?.replace('-', ' ')}</h1>
      {loading && <Loading />}
      {error && navigate('*')}
      {!loading && !error && <Products products={products} />}
    </div>
  );
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      brand: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      model: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        base: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
      }).isRequired,
      year: PropTypes.number.isRequired,
    })
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
