import { NavLink } from 'react-router-dom';
import { useGetNewProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsSlider from '../ProductsSlider/ProductsSlider.jsx';
import './NewArrivals.scss';

const NewArrivals = () => {

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
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      <ProductsSlider products={newProducts} />
    </div>
  );
};

export default NewArrivals;
