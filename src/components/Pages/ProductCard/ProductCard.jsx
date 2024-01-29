import { useNavigate, useParams } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import { useGetProductsByIdQuery } from '../../../redux/slices/productsApiSlice.js';
import gsap from 'gsap';
import Loading from '../../Elements/Loading/Loading.jsx';
import Product from '../../Elements/Product/Product.jsx';
import './ProductCard.scss';

const ProductCard = () => {
  const productCardRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const productCard = productCardRef.current;
    gsap.fromTo(productCard, {opacity: 0, y: '-2%'}, {opacity: 1, y: 0, duration: .5, ease: 'sine.out'});
  }, []);

  const id = params.id;
  const { data: product, isLoading, isError } = useGetProductsByIdQuery(id);

  return(
    <section id='product-card' ref={productCardRef}>
      <div className='productCard__wrapper'>
        {isLoading && <Loading />}
        {isError && navigate('*')}
        {!isLoading && !isError && <Product product={product} />}
      </div>
    </section>
  );
};

export default ProductCard;
