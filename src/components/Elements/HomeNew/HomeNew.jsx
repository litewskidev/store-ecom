import { NavLink } from 'react-router-dom';
import { useGetNewProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../Loading/Loading.jsx';
import Error from '../Error/Error.jsx';
import ProductsSlider from '../ProductsSlider/ProductsSlider.jsx';
import './HomeNew.scss';

const HomeNew = () => {
  //  FETCH DATA
  const { data: newProducts, isLoading, isError } = useGetNewProductsQuery();

  return(
    <div className='newArrivals__wrapper'>
      <div className='newArrivals__title'>
        <h1>NEW ARRIVALS</h1>
        <p>&middot;</p>
        <NavLink to='/categories/new-arrivals'>
          <p>VIEW ALL</p>
        </NavLink>
      </div>
      {isLoading && <Loading />}
      {isError &&
      <Error>{isError.name && isError.name === 'NetworkError'
        ? 'Network error. Please check your internet connection and try again.'
        : 'An unexpected error occurred. Please try again later.'}
      </Error>}
      {!isLoading && !isError && <ProductsSlider products={newProducts} />}
    </div>
  );
};

export default HomeNew;