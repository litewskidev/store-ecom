import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Product from '../../Elements/Product/Product.jsx';
import './SingleProduct.scss';

const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;
  const { data: product, isLoading, isError } = useGetProductsByIdQuery(id);

  return(
    <section id='single-product'>
      <div className='singleProduct__wrapper'>
        {isLoading && <Loading />}
        {isError && navigate('*')}
        {!isLoading && !isError && <Product product={product} />}
      </div>
    </section>
  );
};

export default SingleProduct;
