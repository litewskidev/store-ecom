import { useGetAllProductsQuery } from '../../../redux/slices/productsApiSlice.js';
import './AllWatches.scss';

const AllWatches = () => {
  const { data: allProducts, isLoading, isError, error } = useGetAllProductsQuery();

  return(
    <section id='all-watches'>
      <div className='allwatches__wrapper'>
        <h1>ALL WATCHES</h1>
        {isLoading && <div><p>LOADING...</p></div>}
        {allProducts?.map((product, index) => (
          <div key={product._id}>
            <h1>{product.brand}</h1>
            <h3>{product.model}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllWatches;
