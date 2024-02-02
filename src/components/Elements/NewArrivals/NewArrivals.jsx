import { NavLink, useNavigate } from 'react-router-dom';
import { useGetNewProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../Loading/Loading.jsx';
import ProductsSlider from '../ProductsSlider/ProductsSlider.jsx';
import './NewArrivals.scss';

const NewArrivals = () => {
  const navigate = useNavigate();

  //  FETCH DATA
  const { data: newProducts, isLoading, isError } = useGetNewProductsQuery();

  return(
    <div className='newArrivals__wrapper'>
      <div className='newArrivals__title'>
        <h1>NEW ARRIVALS</h1>
        <NavLink to='/categories/new-arrivals'>
          <p>View All</p>
        </NavLink>
      </div>
      {isLoading && <Loading />}
      {isError && navigate('*')}
      {!isLoading && !isError && <ProductsSlider products={newProducts} />}
    </div>
  );
};

export default NewArrivals;
