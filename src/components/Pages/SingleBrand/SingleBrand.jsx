import { useParams } from 'react-router-dom';
import { useGetProductsByBrandQuery } from '../../../redux/slices/productsApiSlice.js';
import ProductsList from '../../Elements/ProductsList/ProductsList.jsx';

const SingleBrand = () => {
  const params = useParams();
  const brand = params.id;

  //  FETCH DATA
  const { data: brandProducts, isLoading, isError } =  useGetProductsByBrandQuery(brand);

  //  BRAND NAME
  const brandName = (brandProducts?.slice(0, 1).map(product => product.brand.name).toString());

  return(
    <section id='single-brand'>
      <ProductsList title={brandName} products={brandProducts} loading={isLoading} error={isError} />
    </section>
  );
};

export default SingleBrand;
