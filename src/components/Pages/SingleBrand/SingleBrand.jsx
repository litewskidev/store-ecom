import { useParams } from 'react-router-dom';
import { useGetProductsByBrandQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const SingleBrand = () => {
  const params = useParams();
  const brand = params.id;

  //  FETCH DATA
  const { data: brandProducts, isLoading, isError } =  useGetProductsByBrandQuery(brand);

  return(
    <section id='single-brand'>
      <ProductsList title={brand} products={brandProducts} loading={isLoading} error={isError} />
    </section>
  );
};

export default SingleBrand;
