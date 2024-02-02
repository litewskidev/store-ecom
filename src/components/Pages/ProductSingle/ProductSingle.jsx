import { useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Error from '../../Elements/Error/Error.jsx';
import Product from '../../Elements/Product/Product.jsx';
import './ProductSingle.scss';

const ProductSingle = () => {
  const params = useParams();
  const id = params.id;

  //  FETCH DATA
  const { data: product, isLoading, isError } = useGetProductsByIdQuery(id);

  return(
    <section id='product-single'>
      <div className='productSingle__wrapper'>
        {isLoading && <Loading />}
        {isError &&
        <Error>{isError.name && isError.name === 'NetworkError'
          ? 'Network error. Please check your internet connection and try again.'
          : 'An unexpected error occurred. Please try again later.'}
        </Error>}
        {!isLoading && !isError && <Product product={product} />}
      </div>
    </section>
  );
};

export default ProductSingle;
