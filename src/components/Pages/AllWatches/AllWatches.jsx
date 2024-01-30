import { useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import Loading from '../../Elements/Loading/Loading.jsx';
import Products from '../../Elements/Products/Products.jsx';
import './AllWatches.scss';

const AllWatches = () => {
  const navigate = useNavigate();
  const { data: allProducts, isLoading, isError } = useGetAllProductsQuery();

  return(
    <section id='category-list'>
      <div className='categoryList__wrapper'>
        <h1>ALL WATCHES</h1>
        {isLoading && <Loading />}
        {isError && navigate('*')}
        {!isLoading && !isError && <Products products={allProducts} />}
      </div>
    </section>
  );
};

export default AllWatches;
