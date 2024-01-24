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
        {allProducts?.map((product, index) => (
          <NavLink to={`/watches/${product._id}`} key={product._id}>
            <h2>{product.brand}</h2>
            <h3>{product.model}</h3>
            <p>{product.description}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default AllWatches;
