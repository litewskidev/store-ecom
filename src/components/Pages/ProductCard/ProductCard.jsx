import { useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice';
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
        {isLoading && <div><p>LOADING...</p></div>}
        <Product product={product} />
      </div>
    </section>
  );
};

export default ProductCard;
