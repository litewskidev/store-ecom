import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Product from '../../Elements/Product/Product.jsx';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = () => {
  const navigate = useNavigate();
  const params = useParams();

  const id = params.id;
  const { data: product, isLoading, isError } = useGetProductsByIdQuery(id);

  return(
    <section id='product-card'>
      <div className='productCard__wrapper'>
        {isLoading && <Loading />}
        {isError && navigate('*')}
        {!isLoading && !isError && <Product product={product} />}
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default ProductCard;
