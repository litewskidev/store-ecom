import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../../redux/slices/productsApiSlice';
import Product from '../../Elements/Product/Product.jsx';
import './ProductCard.scss';

const ProductCard = () => {
  const params = useParams();
  const id = params.id;

  const {data: product, isLoading} = useGetProductQuery(id);

  return(
    <section id='product-card'>
      <div className='product-card__wrapper'>
        <h1>PRODUCT CARD</h1>
        {isLoading && <div><p>LOADING...</p></div>}
        <Product product={product} />
      </div>
    </section>
  );
};

export default ProductCard;
