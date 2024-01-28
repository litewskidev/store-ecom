import { useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Product from '../../Elements/Product/Product.jsx';
import './ProductCard.scss';

const ProductCard = () => {
  const params = useParams();
  const id = params.id;
  const {data: product, isLoading, isError, error} = useGetProductsByIdQuery(id);

  console.log(product);

  return(
    <section id='product-card'>
      <div className='productCard__wrapper'>
        {isLoading && <Loading />}
        <Product product={product} />
      </div>
    </section>
  );
};

export default ProductCard;
