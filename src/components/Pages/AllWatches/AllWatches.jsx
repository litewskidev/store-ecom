import { NavLink } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import './AllWatches.scss';

const AllWatches = () => {
  const { data: allProducts, isLoading, isError, error } = useGetAllProductsQuery();

  return(
    <section id='all-watches'>
      <div className='allWatches__wrapper'>
        <h1>ALL WATCHES</h1>
        {isLoading && <Loading />}
        <div className='products__wrapper'>
          {allProducts?.map((product, index) => (
            <NavLink className='products__item' to={`/watches/${product._id}`} key={index}>
              <h2>{product.brand.name}</h2>
              <h3>{product.model}</h3>
              {product.images.slice(0, 1).map((image, index) => (
                <div className='product__images' key={index}>
                  <img src={process.env.PUBLIC_URL + `/assets/images/watches/${product?.sku}/${image}.webp`} alt='' />
                </div>
              ))}
              <p>{product.price.currency}{(product?.price.base - (product.price.base / product?.price.discount)).toFixed(3)}</p>
              <p>{product.year}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllWatches;
